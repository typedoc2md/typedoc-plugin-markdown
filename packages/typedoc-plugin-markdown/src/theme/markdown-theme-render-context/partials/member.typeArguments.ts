import { ReflectionType, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders type arguments in angle brackets.
 *
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
