import { MarkdownThemeContext } from 'theme';
import { NamedTupleMember } from 'typedoc';

export function namedTupleType(
  this: MarkdownThemeContext,
  model: NamedTupleMember,
): string {
  return this.partials.someType(model.element);
}
