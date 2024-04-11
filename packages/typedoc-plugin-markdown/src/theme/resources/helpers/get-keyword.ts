import { ReflectionKind } from 'typedoc';

export function getKeyword(model: ReflectionKind): string {
  const KEYWORD_MAP = {
    [ReflectionKind.Class]: 'class',
    [ReflectionKind.Enum]: 'enum',
    [ReflectionKind.Function]: 'function',
    [ReflectionKind.Interface]: 'interface',
    [ReflectionKind.TypeAlias]: 'type',
  };
  return KEYWORD_MAP[model];
}
