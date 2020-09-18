import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function memberSymbol(this: DeclarationReflection) {
  const isStatic = this.flags && this.flags.isStatic;

  if (this.kind === ReflectionKind.ConstructorSignature) {
    return '\\+';
  }
  if (this.kind === ReflectionKind.CallSignature) {
    return '▸';
  }
  if (this.kind === ReflectionKind.TypeAlias) {
    return 'Ƭ';
  }
  if (this.kind === ReflectionKind.ObjectLiteral) {
    return '▪';
  }
  if (this.kind === ReflectionKind.Property && isStatic) {
    return '▪';
  }

  return '•';
}
