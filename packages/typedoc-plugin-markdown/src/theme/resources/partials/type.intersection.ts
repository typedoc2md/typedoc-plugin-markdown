import { IntersectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function intersectionType(
  context: MarkdownThemeRenderContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => context.partials.someType(intersectionType))
    .join(' & ');
}
