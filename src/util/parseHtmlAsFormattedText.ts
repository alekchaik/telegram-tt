import type { ApiFormattedText, ApiMessageEntity } from '../api/types';
import { ApiMessageEntityTypes } from '../api/types';

import { RE_LINK_TEMPLATE } from '../config';
import { IS_EMOJI_SUPPORTED } from './windowEnvironment';

export const ENTITY_CLASS_BY_NODE_NAME: Record<string, ApiMessageEntityTypes> = {
  B: ApiMessageEntityTypes.Bold,
  STRONG: ApiMessageEntityTypes.Bold,
  I: ApiMessageEntityTypes.Italic,
  EM: ApiMessageEntityTypes.Italic,
  INS: ApiMessageEntityTypes.Underline,
  U: ApiMessageEntityTypes.Underline,
  S: ApiMessageEntityTypes.Strike,
  STRIKE: ApiMessageEntityTypes.Strike,
  DEL: ApiMessageEntityTypes.Strike,
  CODE: ApiMessageEntityTypes.Code,
  PRE: ApiMessageEntityTypes.Pre,
  BLOCKQUOTE: ApiMessageEntityTypes.Blockquote,
};

const SYMBOLS_BY_ENTITY_CLASS = {
  [ApiMessageEntityTypes.Bold]: ['**', '__', '<b>'],
  [ApiMessageEntityTypes.Italic]: ['*', '_', '<i>', '<em>'],
  [ApiMessageEntityTypes.Underline]: ['<u>', '<ins>'],
  [ApiMessageEntityTypes.Strike]: ['<s>', '<strike>'],
  [ApiMessageEntityTypes.Code]: ['<code>', '`'],
  [ApiMessageEntityTypes.Pre]: ['<pre>', '```'],
  [ApiMessageEntityTypes.Blockquote]: ['<blockquote>'],
};

type SupportedEntities = (keyof typeof SYMBOLS_BY_ENTITY_CLASS);

const getEntityClassBySymbol = () => {
  const entityClasses = Object.keys(SYMBOLS_BY_ENTITY_CLASS) as SupportedEntities[];

  return entityClasses.reduce<Record<string,
  { entity: SupportedEntities; closingSymbol: string; isMarkdown: boolean } >>((acc, entity) => {
    const symbols = SYMBOLS_BY_ENTITY_CLASS[entity];
    symbols.forEach((symbol) => {
      const isHtml = symbol[0] === '<';
      const closingSymbol = isHtml ? `</${symbol.slice(1)}` : symbol;

      acc[symbol] = { entity, closingSymbol, isMarkdown: !isHtml };
    });
    return acc;
  }, {});
};

const ENTITY_CLASS_BY_SYMBOL = getEntityClassBySymbol();

const getOrderedSymbolEntries = () => {
  const entries = Object.entries(ENTITY_CLASS_BY_SYMBOL);

  entries.sort((a, b) => {
    return b[0].length - a[0].length;
  });

  return entries;
};

const ORDERED_SYMBOL_ENTRIES = getOrderedSymbolEntries();

const getInputEntityMatch = (input:string, chPosition:number) => {
  const symbolsTrackMap = Object.fromEntries(ORDERED_SYMBOL_ENTRIES.map(([symbol]) => [symbol, false]));

  for (let i = 0; i < ORDERED_SYMBOL_ENTRIES.length; i++) {
    const [symbol, entityData] = ORDERED_SYMBOL_ENTRIES[i];

    const doesMatchSymbol = symbol === input.slice(chPosition, chPosition + symbol.length);

    if (!doesMatchSymbol) {
      continue;
    }

    if (entityData.isMarkdown) {
      const isClosingSymbol = symbolsTrackMap[symbol];

      symbolsTrackMap[symbol] = !isClosingSymbol;

      if (isClosingSymbol) {
        return undefined;
      }
    }

    const closingSymbolIndex = input.indexOf(entityData.closingSymbol, chPosition + symbol.length + 1);

    if (closingSymbolIndex !== -1) {
      return {
        start: chPosition,
        end: closingSymbolIndex + entityData.closingSymbol.length - 1,
        entity: entityData.entity,
        symbol,
        closingSymbol: entityData.closingSymbol,
      };
    }
  }

  return undefined;
};

type EntitySymbolPairs = Record<string, { start:number; end:number }[]>;

const getEntitySymbolPairs = (input:string) => {
  const inputSymbolsMap:EntitySymbolPairs = {};

  for (let i = 0; i < input.length; i++) {
    const currentI = i;
    const matchedEntity = getInputEntityMatch(input, currentI);

    if (matchedEntity) {
      const symbol = matchedEntity.symbol;

      const symbolPairs = inputSymbolsMap[symbol] || [];

      symbolPairs.push({
        start: matchedEntity.start,
        end: matchedEntity.end,
      });

      if (!inputSymbolsMap[symbol]) {
        inputSymbolsMap[symbol] = symbolPairs;
      }

      i += symbol.length - 1;
    }
  }

  return inputSymbolsMap;
};

const getEntitySymbolIntersections = (entitySymbolPairs:EntitySymbolPairs) => {
  console.log({ entitySymbolPairs });
  const points:{ index:number;entitySymbol: string; isStart:boolean }[] = [];

  const entitySymbols = Object.keys(entitySymbolPairs) as (keyof typeof entitySymbolPairs)[];
  entitySymbols.forEach((entitySymbol) => {
    const symbolPairs = entitySymbolPairs[entitySymbol];
    symbolPairs?.forEach(({ start, end }) => {
      points.push({ index: start, entitySymbol, isStart: true });
      points.push({ index: end, entitySymbol, isStart: false });
    });
  });

  points.sort((a, b) => a.index - b.index || (a.isStart ? -1 : 1));

  const activeEntitySymbols = new Set<string>();
  const result:{ entitySymbols:string[]; start:number;end:number }[] = [];
  let lastIndex:number | undefined;

  points.forEach((point) => {
    if (lastIndex !== undefined && lastIndex !== point.index) {
      result.push({
        entitySymbols: Array.from(activeEntitySymbols),
        start: lastIndex,
        end: point.index,
      });
    }

    if (point.isStart) {
      activeEntitySymbols.add(point.entitySymbol);
    } else {
      activeEntitySymbols.delete(point.entitySymbol);
    }

    lastIndex = point.index;
  });

  return result;
};

type AstTreeNode = {
  entityType: ApiMessageEntityTypes | 'text';
  body: (string | AstTreeNode)[];
};

const getAstTree = (input:string) => {
  const entitySymbolPairs = getEntitySymbolPairs(input);
  const intersections = getEntitySymbolIntersections(entitySymbolPairs);
  const astTree: AstTreeNode[] = [];

  if (!intersections.length) {
    astTree.push({ entityType: 'text', body: [input] });
    return astTree;
  }

  let incomingIntersectionIndex = 0;
  let commonTextIndex = intersections[incomingIntersectionIndex].start === 0 ? undefined : 0;
  // let commonTextIndex = !intersectionsExist || intersections[incomingIntersectionIndex].startIndex !== 0 ? 0 : null;

  console.log({ astTree: {}, intersections });

  for (let i = 0; i < input.length; i++) {
    const incomingIntersection = intersections[incomingIntersectionIndex];
    const inIntersection = incomingIntersection && i >= incomingIntersection.start;
    const isLastCh = i === input.length - 1;

    if (commonTextIndex !== undefined && (inIntersection || isLastCh)) {
      const commonTextSlice = isLastCh ? input.slice(commonTextIndex) : input.slice(commonTextIndex, i);
      astTree.push({ entityType: 'text', body: [commonTextSlice] });
    }

    if (incomingIntersection && i >= incomingIntersection.start) {
      commonTextIndex = undefined;

      i = incomingIntersection.end;
      incomingIntersectionIndex++;

      const latestIntersectionIndex = incomingIntersection.entitySymbols.length - 1;
      const latestEntitySymbol = incomingIntersection.entitySymbols[latestIntersectionIndex];
      const latestEntityData = ENTITY_CLASS_BY_SYMBOL[latestEntitySymbol];

      const commonText = input.slice(incomingIntersection.start + latestEntitySymbol.length,
        incomingIntersection.end - latestEntityData.closingSymbol.length + 1);

      if (!commonText) {
        continue;
      }

      let newAst:AstTreeNode = {
        entityType: latestEntityData.entity,
        body: [commonText],
      };

      for (let j = latestIntersectionIndex - 1; j >= 0; j--) {
        const entitySymbol = incomingIntersection.entitySymbols[j];
        const entityData = ENTITY_CLASS_BY_SYMBOL[entitySymbol];

        newAst = {
          entityType: entityData.entity,
          body: [newAst],
        };
      }

      astTree.push(newAst);
    } else if (commonTextIndex === undefined) {
      commonTextIndex = i;
    }
  }

  return astTree;
};

console.log({ ENTITY_CLASS_BY_SYMBOL });

const MAX_TAG_DEEPNESS = 3;

// TODO: HERE
export default function parseHtmlAsFormattedText(
  html: string, withMarkdownLinks = false, skipMarkdown = false, id = 'unknown',
): ApiFormattedText {
  const fragment = document.createElement('div');
  fragment.innerHTML = skipMarkdown ? html
    : withMarkdownLinks ? parseMarkdown(parseMarkdownLinks(html)) : parseMarkdown(html);

  console.log(`id-${html}`.slice(0, 20), {
    html, innerHtml: fragment.innerHTML, entityMap: getEntitySymbolPairs(html), astTree: getAstTree(html),
  });

  fixImageContent(fragment);
  const text = fragment.innerText.trim().replace(/\u200b+/g, '');
  const trimShift = fragment.innerText.indexOf(text[0]);
  let textIndex = -trimShift;
  let recursionDeepness = 0;
  const entities: ApiMessageEntity[] = [];

  function addEntity(node: ChildNode) {
    if (node.nodeType === Node.COMMENT_NODE) return;
    const { index, entity } = getEntityDataFromNode(node, text, textIndex);

    if (entity) {
      textIndex = index;
      entities.push(entity);
    } else if (node.textContent) {
      // Skip newlines on the beginning
      if (index === 0 && node.textContent.trim() === '') {
        return;
      }
      textIndex += node.textContent.length;
    }

    if (node.hasChildNodes() && recursionDeepness <= MAX_TAG_DEEPNESS) {
      recursionDeepness += 1;
      Array.from(node.childNodes).forEach(addEntity);
    }
  }

  Array.from(fragment.childNodes).forEach((node) => {
    recursionDeepness = 1;
    addEntity(node);
  });

  console.log({ entities });

  return {
    text,
    entities: undefined,
    // entities: entities.length ? entities : undefined,
    // entities: [{
    //   type: ApiMessageEntityTypes.Bold,
    //   offset:0,
    //   length: text.length
    // }]
  };
}

export function fixImageContent(fragment: HTMLDivElement) {
  fragment.querySelectorAll('img').forEach((node) => {
    if (node.dataset.documentId) { // Custom Emoji
      node.textContent = (node as HTMLImageElement).alt || '';
    } else { // Regular emoji with image fallback
      node.replaceWith(node.alt || '');
    }
  });
}

function parseMarkdownNew(html:string) {
  return html;
}

function parseMarkdown(html: string) {
  let parsedHtml = html.slice(0);

  // Strip redundant nbsp's
  parsedHtml = parsedHtml.replace(/&nbsp;/g, ' ');

  // Replace <div><br></div> with newline (new line in Safari)
  parsedHtml = parsedHtml.replace(/<div><br([^>]*)?><\/div>/g, '\n');
  // Replace <br> with newline
  parsedHtml = parsedHtml.replace(/<br([^>]*)?>/g, '\n');

  // Strip redundant <div> tags
  parsedHtml = parsedHtml.replace(/<\/div>(\s*)<div>/g, '\n');
  parsedHtml = parsedHtml.replace(/<div>/g, '\n');
  parsedHtml = parsedHtml.replace(/<\/div>/g, '');

  // Pre
  parsedHtml = parsedHtml.replace(/^`{3}(.*?)[\n\r](.*?[\n\r]?)`{3}/gms, '<pre data-language="$1">$2</pre>');
  parsedHtml = parsedHtml.replace(/^`{3}[\n\r]?(.*?)[\n\r]?`{3}/gms, '<pre>$1</pre>');
  parsedHtml = parsedHtml.replace(/[`]{3}([^`]+)[`]{3}/g, '<pre>$1</pre>');

  // Code
  parsedHtml = parsedHtml.replace(
    /(?!<(code|pre)[^<]*|<\/)[`]{1}([^`\n]+)[`]{1}(?![^<]*<\/(code|pre)>)/g,
    '<code>$2</code>',
  );

  // Custom Emoji markdown tag
  if (!IS_EMOJI_SUPPORTED) {
    // Prepare alt text for custom emoji
    parsedHtml = parsedHtml.replace(/\[<img[^>]+alt="([^"]+)"[^>]*>]/gm, '[$1]');
  }
  parsedHtml = parsedHtml.replace(
    /(?!<(?:code|pre)[^<]*|<\/)\[([^\]\n]+)\]\(customEmoji:(\d+)\)(?![^<]*<\/(?:code|pre)>)/g,
    '<img alt="$1" data-document-id="$2">',
  );

  // Other simple markdown
  parsedHtml = parsedHtml.replace(
    /(?!<(code|pre)[^<]*|<\/)[*]{2}([^*\n]+)[*]{2}(?![^<]*<\/(code|pre)>)/g,
    '<b>$2</b>',
  );
  parsedHtml = parsedHtml.replace(
    /(?!<(code|pre)[^<]*|<\/)[_]{2}([^_\n]+)[_]{2}(?![^<]*<\/(code|pre)>)/g,
    '<i>$2</i>',
  );
  parsedHtml = parsedHtml.replace(
    /(?!<(code|pre)[^<]*|<\/)[~]{2}([^~\n]+)[~]{2}(?![^<]*<\/(code|pre)>)/g,
    '<s>$2</s>',
  );
  parsedHtml = parsedHtml.replace(
    /(?!<(code|pre)[^<]*|<\/)[|]{2}([^|\n]+)[|]{2}(?![^<]*<\/(code|pre)>)/g,
    `<span data-entity-type="${ApiMessageEntityTypes.Spoiler}">$2</span>`,
  );

  return parsedHtml;
}

function parseMarkdownLinks(html: string) {
  return html.replace(new RegExp(`\\[([^\\]]+?)]\\((${RE_LINK_TEMPLATE}+?)\\)`, 'g'), (_, text, link) => {
    const url = link.includes('://') ? link : link.includes('@') ? `mailto:${link}` : `https://${link}`;
    return `<a href="${url}">${text}</a>`;
  });
}

function getEntityDataFromNode(
  node: ChildNode,
  rawText: string,
  textIndex: number,
): { index: number; entity?: ApiMessageEntity } {
  const type = getEntityTypeFromNode(node);

  if (!type || !node.textContent) {
    return {
      index: textIndex,
      entity: undefined,
    };
  }

  const rawIndex = rawText.indexOf(node.textContent, textIndex);
  // In some cases, last text entity ends with a newline (which gets trimmed from `rawText`).
  // In this case, `rawIndex` would return `-1`, so we use `textIndex` instead.
  const index = rawIndex >= 0 ? rawIndex : textIndex;
  const offset = rawText.substring(0, index).length;
  const { length } = rawText.substring(index, index + node.textContent.length);

  if (type === ApiMessageEntityTypes.TextUrl) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        url: (node as HTMLAnchorElement).href,
      },
    };
  }
  if (type === ApiMessageEntityTypes.MentionName) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        userId: (node as HTMLAnchorElement).dataset.userId!,
      },
    };
  }

  if (type === ApiMessageEntityTypes.Pre) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        language: (node as HTMLPreElement).dataset.language,
      },
    };
  }

  if (type === ApiMessageEntityTypes.CustomEmoji) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        documentId: (node as HTMLImageElement).dataset.documentId!,
      },
    };
  }

  return {
    index,
    entity: {
      type,
      offset,
      length,
    },
  };
}

function getEntityTypeFromNode(node: ChildNode): ApiMessageEntityTypes | undefined {
  if (node instanceof HTMLElement && node.dataset.entityType) {
    return node.dataset.entityType as ApiMessageEntityTypes;
  }

  if (ENTITY_CLASS_BY_NODE_NAME[node.nodeName]) {
    return ENTITY_CLASS_BY_NODE_NAME[node.nodeName];
  }

  if (node.nodeName === 'A') {
    const anchor = node as HTMLAnchorElement;
    if (anchor.dataset.entityType === ApiMessageEntityTypes.MentionName) {
      return ApiMessageEntityTypes.MentionName;
    }
    if (anchor.dataset.entityType === ApiMessageEntityTypes.Url) {
      return ApiMessageEntityTypes.Url;
    }
    if (anchor.href.startsWith('mailto:')) {
      return ApiMessageEntityTypes.Email;
    }
    if (anchor.href.startsWith('tel:')) {
      return ApiMessageEntityTypes.Phone;
    }
    if (anchor.href !== anchor.textContent) {
      return ApiMessageEntityTypes.TextUrl;
    }

    return ApiMessageEntityTypes.Url;
  }

  if (node.nodeName === 'SPAN') {
    return (node as HTMLElement).dataset.entityType as any;
  }

  if (node.nodeName === 'IMG') {
    if ((node as HTMLImageElement).dataset.documentId) {
      return ApiMessageEntityTypes.CustomEmoji;
    }
  }

  return undefined;
}
