import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ReflectionType, SomeType } from 'typedoc';

export function typeArguments(
  this: MarkdownThemeContext,
  model: SomeType[],
  options?: { forceCollapse?: boolean },
): string {
  return `${this.helpers.getAngleBracket('<')}${model
    .map((typeArgument) => {
      if (typeArgument instanceof ReflectionType) {
        return this.partials.reflectionType(typeArgument, {
          forceCollapse: options?.forceCollapse,
        });
      }
      return this.partials.someType(typeArgument);
    })
    .join(', ')}${this.helpers.getAngleBracket('>')}`;
}
