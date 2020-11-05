import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function ifShowIndex(this: DeclarationReflection, options: any) {
  return !this.kind ||
    this.kind === ReflectionKind.SomeModule ||
    this.kind === ReflectionKind.Namespace
    ? options.fn(this)
    : options.inverse(this);
}
