import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { needsParenthesesInIntersection } from '@plugin/theme/lib/index.js';
import { IntersectionType } from 'typedoc';

export function intersectionType(
  this: MarkdownThemeContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => {
      const theType = this.partials.someType(intersectionType);
      return needsParenthesesInIntersection(intersectionType)
        ? `(${theType})`
        : theType;
    })
    .join(' & ');
}
