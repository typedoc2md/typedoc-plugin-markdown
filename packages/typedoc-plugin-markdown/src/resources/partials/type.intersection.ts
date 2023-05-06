import { IntersectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function intersectionType(
  context: MarkdownThemeRenderContext,
  model: IntersectionType,
) {
  return model.types
    .map((intersectionType) =>
      context.partials.someType(intersectionType, 'none'),
    )
    .join(' & ');
}
