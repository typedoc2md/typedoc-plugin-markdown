import { MarkdownThemeContext } from 'theme';
import { NamedTupleMember } from 'typedoc';

/**
 * @category Type Partials
 */
export function namedTupleType(
  this: MarkdownThemeContext,
  model: NamedTupleMember,
): string {
  return this.partials.someType(model.element);
}
