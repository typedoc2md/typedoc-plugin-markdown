import {
  DeclarationReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';

export function isGroupKind(
  reflection: DeclarationReflection | SignatureReflection,
) {
  const groupKinds = [
    ReflectionKind.Class,
    ReflectionKind.Interface,
    ReflectionKind.Enum,
    ReflectionKind.Function,
    ReflectionKind.Variable,
    ReflectionKind.TypeAlias,
  ];
  return groupKinds.includes(reflection.kind);
}
