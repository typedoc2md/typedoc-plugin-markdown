import { MarkdownThemeRenderContext } from '@theme/render-context';
import { IntersectionType } from 'typedoc';

/**
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
