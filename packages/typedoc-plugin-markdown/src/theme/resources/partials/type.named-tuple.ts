import { MarkdownThemeRenderContext } from '@theme/render-context';
import { NamedTupleMember } from 'typedoc';

/**
 * @category Type Partials
 */
export function namedTupleType(
  context: MarkdownThemeRenderContext,
  model: NamedTupleMember,
): string {
  return context.partials.someType(model.element);
}
