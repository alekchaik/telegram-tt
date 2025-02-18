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
  [ApiMessageEntityTypes.Italic]: ['*', '_', '<b>'],
  [ApiMessageEntityTypes.Underline]: ['<i>', '<ins>'],
  [ApiMessageEntityTypes.Strike]: ['<s>', '<strike>'],
  [ApiMessageEntityTypes.Code]: ['<code>'],
  [ApiMessageEntityTypes.Pre]: ['<pre>'],
  [ApiMessageEntityTypes.Blockquote]: ['<blockquote>'],
};

const getEntityClassBySymbol = () => {
  const entityClasses = Object.keys(SYMBOLS_BY_ENTITY_CLASS) as (keyof typeof SYMBOLS_BY_ENTITY_CLASS)[];

  return entityClasses.reduce<Record<string,
  { entity: ApiMessageEntityTypes; closingSymbol: string; isMarkdown: boolean } >>((acc, entity) => {
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

    console.log({ doesMatchSymbol, symbol, chPosition });

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
        end: closingSymbolIndex + entityData.closingSymbol.length,
        entity: entityData.entity,
        newIndex: chPosition + symbol.length,
      };
    }
  }

  return undefined;
};

const getEntitySymbolPairs = (input:string) => {
  const inputSymbolsMap = new Map<ApiMessageEntityTypes, { start:number;end:number }[]>();

  if (!input.includes('keku')) {
    return inputSymbolsMap;
  }

  let i = 0;
  do {
    const currentI = i;
    i++;
    console.log({ indexK: currentI });
    const matchedEntity = getInputEntityMatch(input, currentI);

    if (matchedEntity) {
      const symbolPairs = inputSymbolsMap.get(matchedEntity.entity) || [];

      symbolPairs.push({ start: matchedEntity.start, end: matchedEntity.end });

      inputSymbolsMap.set(matchedEntity.entity, symbolPairs);
      console.log({ newIndex: matchedEntity.newIndex });
      i = matchedEntity.newIndex;
    }
  } while (i < input.length);

  return inputSymbolsMap;
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

  console.log(`id-${html}`.slice(0, 20), { html, innerHtml: fragment.innerHTML, entityMap: getEntitySymbolPairs(html) });

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
