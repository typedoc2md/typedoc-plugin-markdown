import { ReflectionKind } from 'typedoc';

export const OutputFileStrategy = {
  Members: 'members',
  Modules: 'modules',
} as const;

export type OutputFileStrategy =
  (typeof OutputFileStrategy)[keyof typeof OutputFileStrategy];

export const FormatStyle = {
  List: 'list',
  Table: 'table',
} as const;

export type FormatStyle = (typeof FormatStyle)[keyof typeof FormatStyle];

export const MembersWithOwnFile = [
  ReflectionKind[ReflectionKind.Enum],
  ReflectionKind[ReflectionKind.Variable],
  ReflectionKind[ReflectionKind.Function],
  ReflectionKind[ReflectionKind.Class],
  ReflectionKind[ReflectionKind.Interface],
  ReflectionKind[ReflectionKind.TypeAlias],
];
