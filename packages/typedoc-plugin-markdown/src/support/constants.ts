import { ReflectionKind } from 'typedoc';

export const URL_PREFIX = /^(http|ftp)s?:\/\//;

export const INDEX_PLACEHOLDER_KEY = '$TYPEDOC_INDEX';

export const SYMBOLS_WITH_DOCUMENTS = [
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Enum,
  ReflectionKind.Function,
  ReflectionKind.Variable,
  ReflectionKind.TypeAlias,
];
