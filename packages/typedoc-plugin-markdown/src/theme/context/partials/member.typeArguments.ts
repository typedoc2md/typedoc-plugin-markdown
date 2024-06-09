import { MarkdownThemeContext } from 'theme';
import { ReflectionType, SomeType } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeArguments(
  this: MarkdownThemeContext,
  model: SomeType[],
  options?: { forceCollapse?: boolean },
): string {
  return `\\<${model
    .map((typeArgument) =>
      typeArgument instanceof ReflectionType
        ? this.partials.reflectionType(typeArgument, {
            forceCollapse: options?.forceCollapse,
          })
        : this.partials.someType(typeArgument),
    )
    .join(', ')}\\>`;
}
