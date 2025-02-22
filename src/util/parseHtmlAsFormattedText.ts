import type { ApiFormattedText, ApiMessageEntity } from '../api/types';
import { ApiMessageEntityTypes } from '../api/types';

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
  [ApiMessageEntityTypes.Strike]: ['<s>', '<strike>', '<del>'],
  [ApiMessageEntityTypes.Code]: ['<code', '`'],
  [ApiMessageEntityTypes.Pre]: ['<pre>', '```'],
  [ApiMessageEntityTypes.Blockquote]: ['<blockquote>'],
  [ApiMessageEntityTypes.TextUrl]: ['<a'],
  [ApiMessageEntityTypes.CustomEmoji]: ['<img'],
  [ApiMessageEntityTypes.Spoiler]: ['<span'],
};

const getEntityClassBySymbol = () => {
  const entityClasses = Object.keys(SYMBOLS_BY_ENTITY_CLASS) as (keyof typeof SYMBOLS_BY_ENTITY_CLASS)[];

  return entityClasses.reduce<Record<string,
  ApiMessageEntityTypes >>((acc, entityType) => {
    const symbols = SYMBOLS_BY_ENTITY_CLASS[entityType];
    symbols.forEach((symbol) => {
      acc[symbol] = entityType;
    });
    return acc;
  }, {});
};

const ENTITY_CLASS_BY_SYMBOL = getEntityClassBySymbol();

type EntityData = {
  entityType: ApiMessageEntityTypes | undefined;
  textLength: number;
  entityLength: number;
  textOffset: number;
  ignorePositions:{
    start:number;
    length:number;
  }[] | undefined;
  extra?:{
    url?:string ;
    documentId?: string;
  };
};

const wrappedEntityDataRetrieverHelper = (openSymbolIndex:number, openSymbolLength:number,
  closingSymbolIndex:number, closingSymbolLength:number) => {
  const ignorePositions:EntityData['ignorePositions'] = [{
    start: closingSymbolIndex,
    length: closingSymbolLength,
  }];

  const entityLength = closingSymbolIndex - openSymbolIndex + closingSymbolLength;
  const textLength = entityLength - openSymbolLength - closingSymbolLength;

  return {
    ignorePositions,
    entityLength,
    textLength,
    textOffset: openSymbolLength,

  };
};

const wrappedEntityDataRetriever = (input:string, position:number, symbol:string):EntityData | undefined => {
  const entityType = ENTITY_CLASS_BY_SYMBOL[symbol];
  const isHtml = symbol[0] === '<';
  const closingSymbol = isHtml ? `</${symbol.slice(1)}` : symbol;
  const openSymbolIndex = input.indexOf(symbol, position);

  if (openSymbolIndex !== position) {
    return undefined;
  }

  const closingSymbolIndex = input.indexOf(closingSymbol, openSymbolIndex + symbol.length + 1);

  if (closingSymbolIndex < 0) {
    return undefined;
  }

  return {
    entityType,
    ...wrappedEntityDataRetrieverHelper(openSymbolIndex, symbol.length, closingSymbolIndex, closingSymbol.length),
  };
};

const linkEntityDataRetriever = (input:string, position:number):EntityData | undefined => {
  const regex = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>(.*?)<\/a>/gi;

  const closingSymbol = '</a>';

  const closingSymbolIndex = input.indexOf(closingSymbol, position);

  if (closingSymbolIndex < 0) {
    return undefined;
  }

  const inputSlice = input.slice(position, closingSymbolIndex + closingSymbol.length);

  const match = regex.exec(inputSlice);

  if (!match) {
    return undefined;
  }

  const link = match[1];
  const text = match[2];

  if (!link || !text) {
    return undefined;
  }

  const textOffset = input.indexOf(text, position);

  const textLength = text.length;

  const entityLength = closingSymbolIndex - position + closingSymbol.length;

  return {
    entityType: ApiMessageEntityTypes.TextUrl,
    textLength,
    ignorePositions: [],
    textOffset,
    entityLength,
    extra: {
      url: link,
    },
  };
};

const imgEntityDataRetriever = (input: string, position:number):EntityData | undefined => {
  const imgRegex = /^<img\b[^>]*alt="([^"]+)"(?:[^>]*data-document-id="([^"]+)")?[^>]*>/;
  const match = input.slice(position).match(imgRegex);

  if (!match) {
    return undefined;
  }

  const imgTag = match[0];

  const text: string = match[1];

  if (!text || input.indexOf(imgTag, position) !== position) {
    return undefined;
  }

  const documentId = match[2];

  const entityType = documentId ? ApiMessageEntityTypes.CustomEmoji : undefined;

  const entityLength = imgTag.length;

  const textOffset = imgTag.indexOf(text);

  return {
    entityType,
    textLength: text.length,
    ignorePositions: [{
      start: position,
      length: entityLength,
    }],
    textOffset,
    entityLength,
    extra: documentId ? {
      documentId,
    } : undefined,
  };
};

const complexWrappedEntityDataRetriever = (input:string, position:number, symbol:string) => {
  const entityType = ENTITY_CLASS_BY_SYMBOL[symbol];

  const openSymbolIndex = input.indexOf(symbol, position);

  if (openSymbolIndex !== position) {
    return undefined;
  }
  const openSymbolLastIndex = input.indexOf('>', openSymbolIndex);

  if (openSymbolLastIndex < 0) {
    return undefined;
  }

  const closingSymbol = `</${symbol.slice(1)}>`;

  const closingSymbolIndex = input.indexOf(closingSymbol, openSymbolLastIndex);

  if (closingSymbolIndex < 0) {
    return undefined;
  }

  const openSymbolLength = openSymbolLastIndex - openSymbolIndex + 1;

  return {
    entityType,
    ...wrappedEntityDataRetrieverHelper(openSymbolIndex, openSymbolLength, closingSymbolIndex, closingSymbol.length),
  };
};

const retrieveEntityData = (input:string, position:number, symbol:string):EntityData | undefined => {
  if (symbol === '<code' || symbol === '<span') {
    return complexWrappedEntityDataRetriever(input, position, symbol);
  }

  if (symbol === '<a') {
    return linkEntityDataRetriever(input, position);
  }

  if (symbol === '<img') {
    return imgEntityDataRetriever(input, position);
  }

  return wrappedEntityDataRetriever(input, position, symbol);
};

const getOrderedSymbols = () => {
  const symbols = Object.keys(ENTITY_CLASS_BY_SYMBOL);
  symbols.sort((a, b) => {
    return b[0].length - a[0].length;
  });

  return symbols;
};

const ORDERED_SYMBOLS = getOrderedSymbols();

const getInputEntityMatch = (input:string, chPosition:number, potentialEntitySymbols: string[]) => {
  for (let i = 0; i < potentialEntitySymbols.length; i++) {
    const symbol = potentialEntitySymbols[i];

    const entityData = retrieveEntityData(input, chPosition, symbol);

    if (entityData) {
      return entityData;
    }
  }

  return undefined;
};

type EntitySymbolPairData = Pick<EntityData, 'textLength' | 'entityType' | 'textOffset' | 'extra'> &
{ start:number;end:number };

type EntitySymbolPairs = { [entity in ApiMessageEntityTypes]?: EntitySymbolPairData[] };

const getSymbolMapsByCharacter = () => {
  return ORDERED_SYMBOLS.reduce<Record<string, string[] | undefined>
  >((acc, symbol) => {
    const firstCh = symbol[0];

    if (!acc[firstCh]) {
      acc[firstCh] = [symbol];
    } else {
      acc[firstCh].push(symbol);
    }

    return acc;
  }, {});
};

const ENTITIES_BY_FIRST_SYMBOL_CH = getSymbolMapsByCharacter();

const getEntitySymbolPairs = (input:string) => {
  const inputSymbolsMap:EntitySymbolPairs = {};
  const ignoredPositions = new Set<number>();

  for (let i = 0; i < input.length; i++) {
    const currentI = i;

    if (ignoredPositions.has(currentI)) {
      continue;
    }

    const potentialEntitySymbols = ENTITIES_BY_FIRST_SYMBOL_CH[input[currentI]];

    if (!potentialEntitySymbols) {
      continue;
    }

    const matchedEntityData = getInputEntityMatch(input, currentI, potentialEntitySymbols);

    if (!matchedEntityData) {
      continue;
    }

    const { ignorePositions, ...pointData } = matchedEntityData;

    ignorePositions?.forEach((position) => {
      for (let j = 0; j < position.length; j++) {
        ignoredPositions.add(j + i + position.start);
      }
    });

    if (pointData.entityType) {
      const symbolPairs = inputSymbolsMap[pointData.entityType] || [];

      symbolPairs.push({
        start: i,
        end: i + pointData.entityLength - 1,
        ...pointData,
      });

      if (!inputSymbolsMap[pointData.entityType]) {
        inputSymbolsMap[pointData.entityType] = symbolPairs;
      }
    }

    i += pointData.textOffset - 1;
  }

  return inputSymbolsMap;
};

type AstTreeNode = {
  entityType: ApiMessageEntityTypes | undefined;
  body: (string | AstTreeNode)[];
  extra?: {};
};

const getAstTreeHelper = (input:string,
  points:EntitySymbolPairData[], minPosition = 0, maxPosition = input.length) => {
  const astTree: AstTreeNode[] = [];

  if (!points.length) {
    astTree.push({ entityType: undefined, body: [input.slice(minPosition, maxPosition)] });
    return astTree;
  }

  let lastPointIndex;

  for (let i = 0; i < points.length; i++) {
    const currentI = i;
    const point = points[currentI];

    const previousPosition = currentI === 0 ? minPosition : points[currentI - 1].end + 1;

    const previousTextSlice = input.slice(previousPosition, point.start);

    if (previousTextSlice) {
      astTree.push({
        entityType: undefined,
        body: [previousTextSlice],
      });
    }

    let nextI = currentI;

    const nestedPoints = points.filter((nestedPoint, nestedPointI) => {
      const isNestedPoint = nestedPointI > i && point.start <= nestedPoint.start && point.end >= nestedPoint.end;

      if (!isNestedPoint) {
        return false;
      }

      nextI = Math.max(nextI, nestedPointI);
      return true;
    });

    const newMinPosition = point.start + point.textOffset;
    const newMaxPosition = newMinPosition + point.textLength;

    const body = point.entityType ? getAstTreeHelper(input, nestedPoints, newMinPosition, newMaxPosition)
      : [input.slice(newMinPosition, newMaxPosition)];

    astTree.push({
      entityType: point.entityType,
      body,
      extra: point.extra,
    });

    i = nextI;
    lastPointIndex = currentI;
  }

  if (lastPointIndex !== undefined) {
    const lastPoint = points[lastPointIndex];
    const lastInputSlice = input.slice(lastPoint.end + 1, maxPosition);

    if (lastInputSlice) {
      astTree.push({ entityType: undefined, body: [lastInputSlice] });
    }
  }

  return astTree;
};

const getAstTree = (input:string) => {
  const entitySymbolPairs = getEntitySymbolPairs(input);

  const points = Object.values(entitySymbolPairs).flat();

  points.sort((a, b) => a.start - b.start);

  const astTree = getAstTreeHelper(input, points);

  return astTree;
};

export default function parseHtmlAsFormattedText(
  html: string,
): ApiFormattedText {
  const astTree = getAstTree(html);

  let text = '';
  const entities:ApiMessageEntity[] = [];

  const addEntity = (node: AstTreeNode, entityDataList: Pick<AstTreeNode, 'entityType' | 'extra'>[]) => {
    if (!node.entityType) {
      const nodeText = node.body[0];

      if (typeof nodeText === 'string') {
        const offset = text.length;
        const length = nodeText.length;

        entityDataList.forEach((entityData) => {
          entities.push({
            offset,
            length,
            type: entityData.entityType,
            ...entityData.extra,
          } as ApiMessageEntity);
        });
        text += nodeText;
      }

      return;
    }

    node.body.forEach((nestedNode) => {
      if (typeof nestedNode === 'string') {
        return;
      }
      addEntity(nestedNode, [...entityDataList, { entityType: node.entityType, extra: node.extra }]);
    });
  };

  astTree.forEach((node) => {
    addEntity(node, []);
  });

  return {
    text,
    entities: entities.length ? entities : undefined,
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
