import { IntersectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function intersectionType(
  context: MarkdownThemeRenderContext,
  model: IntersectionType,
) {
  return model.types
    .map((intersectionType) => context.partials.someType(intersectionType))
    .join(' & ');
}
