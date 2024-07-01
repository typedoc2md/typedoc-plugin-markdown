import { MarkdownThemeContext } from '@plugin/theme';
import { ReflectionType, SomeType } from 'typedoc';

export function typeArguments(
  this: MarkdownThemeContext,
  model: SomeType[],
  options?: { forceCollapse?: boolean },
): string {
  return `${this.helpers.getAngleBracket('<')}${model
    .map((typeArgument) =>
      typeArgument instanceof ReflectionType
        ? this.partials.reflectionType(typeArgument, {
            forceCollapse: options?.forceCollapse,
          })
        : this.partials.someType(typeArgument),
    )
    .join(', ')}${this.helpers.getAngleBracket('>')}`;
}
