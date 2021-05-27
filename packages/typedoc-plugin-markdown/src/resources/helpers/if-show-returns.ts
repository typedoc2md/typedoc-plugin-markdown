import * as Handlebars from 'handlebars';
import { ReflectionKind, SignatureReflection } from 'typedoc';

export function ifShowReturns(
  this: SignatureReflection,
  options: Handlebars.HelperOptions,
) {
  return this.type && !this.parent?.kindOf(ReflectionKind.Constructor)
    ? options.fn(this)
    : options.inverse(this);
}
