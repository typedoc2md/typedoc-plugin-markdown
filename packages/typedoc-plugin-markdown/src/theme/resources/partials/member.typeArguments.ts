import { MarkdownThemeRenderContext } from '@theme/render-context';
import { ReflectionType, SomeType } from 'typedoc';

/**å
 * @category Member Partials
 */
export function typeArguments(
  context: MarkdownThemeRenderContext,
  model: SomeType[],
  foreCollpase = false,
): string {
  return `\\<${model
    .map((typeArgument) =>
      typeArgument instanceof ReflectionType
        ? context.partials.reflectionType(typeArgument, foreCollpase)
        : context.partials.someType(typeArgument),
    )
    .join(', ')}\\>`;
}
