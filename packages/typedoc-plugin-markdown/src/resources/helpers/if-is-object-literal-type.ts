import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function ifIsObjectLiteralType(this: DeclarationReflection, truthy = true, options: any) {
  const isLiteralType = this.kind === ReflectionKind.ObjectLiteral;
  if (isLiteralType && truthy) {
    return options.fn(this);
  }
  return !isLiteralType && !truthy ? options.fn(this) : options.inverse(this);
}
