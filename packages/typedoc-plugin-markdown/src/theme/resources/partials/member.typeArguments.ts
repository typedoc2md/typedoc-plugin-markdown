import { MarkdownThemeContext } from '@plugin/theme';
import { ReflectionType, SomeType } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeArguments(
  this: MarkdownThemeContext,
  model: SomeType[],
  options?: { foreCollpase?: boolean },
): string {
  return `\\<${model
    .map((typeArgument) =>
      typeArgument instanceof ReflectionType
        ? this.partials.reflectionType(typeArgument, {
            foreCollpase: options?.foreCollpase,
          })
        : this.partials.someType(typeArgument),
    )
    .join(', ')}\\>`;
}
