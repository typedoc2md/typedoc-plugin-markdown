import { ReflectionKind } from 'typedoc';

export const URL_PREFIX = /^(http|ftp)s?:\/\//;

export const PLURALS = {
  [ReflectionKind.Class]: 'Classes',
  [ReflectionKind.Property]: 'Properties',
  [ReflectionKind.Enum]: 'Enumerations',
  [ReflectionKind.EnumMember]: 'Enumeration members',
  [ReflectionKind.Namespace]: 'Namespaces',
  [ReflectionKind.TypeAlias]: 'Type aliases',
};

export const SYMBOLS_WITH_DOCUMENTS = [
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Enum,
  ReflectionKind.Function,
  ReflectionKind.Variable,
  ReflectionKind.TypeAlias,
];
