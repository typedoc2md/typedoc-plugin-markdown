import { IntersectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function intersectionType(
  context: MarkdownThemeRenderContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => context.someType(intersectionType))
    .join(' & ');
}
