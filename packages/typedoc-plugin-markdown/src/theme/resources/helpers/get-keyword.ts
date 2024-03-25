import { ReflectionKind } from 'typedoc';

export function getKeyword(kind: ReflectionKind) {
  const KEYWORD_MAP = {
    [ReflectionKind.Class]: 'class',
    [ReflectionKind.Interface]: 'interface',
    [ReflectionKind.Enum]: 'enum',
    [ReflectionKind.TypeAlias]: 'type',
  };
  return KEYWORD_MAP[kind];
}
