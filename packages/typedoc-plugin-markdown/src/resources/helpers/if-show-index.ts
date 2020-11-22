import * as Handlebars from 'handlebars';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

import MarkdownTheme from '../../theme';

export function ifShowIndex(
  this: DeclarationReflection,
  options: Handlebars.HelperOptions,
) {
  if (MarkdownTheme.HANDLEBARS.helpers.navigationEnabled()) {
    return !this.kind ||
      this.kind === ReflectionKind.SomeModule ||
      this.kind === ReflectionKind.Namespace
      ? options.fn(this)
      : options.inverse(this);
  }
  return options.fn(this);
}
