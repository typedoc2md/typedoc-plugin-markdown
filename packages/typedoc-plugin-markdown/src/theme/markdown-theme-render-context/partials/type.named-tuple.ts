import { NamedTupleMember } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an NamedTupleMember model to a string.
 *
 * @category Type Partials
 */
export function namedTupleType(
  context: MarkdownThemeRenderContext,
  model: NamedTupleMember,
): string {
  return context.partials.someType(model.element);
}
