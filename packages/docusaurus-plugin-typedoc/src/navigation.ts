import { ReflectionKind } from 'typedoc';

export const CATEGORY_POSITION = {
  [ReflectionKind.Module]: 1,
  [ReflectionKind.Namespace]: 1,
  [ReflectionKind.Enum]: 2,
  [ReflectionKind.Class]: 3,
  [ReflectionKind.Interface]: 4,
  [ReflectionKind.TypeAlias]: 5,
  [ReflectionKind.Variable]: 6,
  [ReflectionKind.Function]: 7,
  [ReflectionKind.ObjectLiteral]: 8,
};
