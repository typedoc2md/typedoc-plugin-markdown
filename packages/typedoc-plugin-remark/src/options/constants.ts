import { ReflectionKind } from 'typedoc';

export const FRONTMATTER_REGEX = /^---\s*[\r\n]+[^]*?[\r\n]+---\s*[\r\n]/;

export const KIND_TO_STRING = new Map<ReflectionKind, string>([
  [ReflectionKind.Project, 'Project'],
  [ReflectionKind.Module, 'Module'],
  [ReflectionKind.Namespace, 'Namespace'],
  [ReflectionKind.Document, 'Document'],
  [ReflectionKind.Class, 'Class'],
  [ReflectionKind.Interface, 'Interface'],
  [ReflectionKind.Enum, 'Enum'],
  [ReflectionKind.TypeAlias, 'TypeAlias'],
  [ReflectionKind.Function, 'Function'],
  [ReflectionKind.Variable, 'Variable'],
]);
