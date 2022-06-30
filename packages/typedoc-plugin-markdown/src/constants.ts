import { ReflectionKind } from 'typedoc';

export const URL_PREFIX = /^(http|ftp)s?:\/\//;

export const PLURALS = {
  [ReflectionKind.Class]: 'Classes',
  [ReflectionKind.Property]: 'Properties',
  [ReflectionKind.Enum]: 'Enumerations',
  [ReflectionKind.EnumMember]: 'Enumeration members',
  [ReflectionKind.TypeAlias]: 'Type aliases',
};
