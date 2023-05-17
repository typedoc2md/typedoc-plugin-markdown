import { IntersectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';

export function intersectionType(
  context: MarkdownThemeRenderContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => context.someType(intersectionType, 'none'))
    .join(' & ');
}
