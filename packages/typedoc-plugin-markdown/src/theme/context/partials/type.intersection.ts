import { MarkdownThemeContext } from 'theme';
import { IntersectionType } from 'typedoc';

/**
 * @category Type Partials
 */
export function intersectionType(
  this: MarkdownThemeContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => this.partials.someType(intersectionType))
    .join(' & ');
}
