import { ReflectionKind } from 'typedoc';

export const URL_PREFIX = /^(http|ftp)s?:\/\//;

export const SYMBOLS_WITH_DOCUMENTS = [
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Enum,
  ReflectionKind.Function,
  ReflectionKind.Variable,
  ReflectionKind.TypeAlias,
];

export const VALID_KINDS_WITH_OWN_FILE: string[] = [
  ReflectionKind[ReflectionKind.Class],
  ReflectionKind[ReflectionKind.Interface],
  ReflectionKind[ReflectionKind.Enum],
  ReflectionKind[ReflectionKind.Function],
  ReflectionKind[ReflectionKind.TypeAlias],
  ReflectionKind[ReflectionKind.Variable],
];
