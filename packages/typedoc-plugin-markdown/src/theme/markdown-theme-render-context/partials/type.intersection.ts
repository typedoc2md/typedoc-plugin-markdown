import { IntersectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an IntersectionType model to a string.
 *
 * @category Type Partials
 */
export function intersectionType(
  context: MarkdownThemeRenderContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => context.partials.someType(intersectionType))
    .join(' & ');
}
