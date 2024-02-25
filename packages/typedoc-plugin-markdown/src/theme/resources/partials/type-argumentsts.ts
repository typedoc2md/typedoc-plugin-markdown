import { ReflectionType, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function typeArguments(
  context: MarkdownThemeRenderContext,
  typeArguments: SomeType[],
  foreCollpase = false,
): string {
  return `\\<${typeArguments
    .map((typeArgument) =>
      typeArgument instanceof ReflectionType
        ? context.partials.reflectionType(typeArgument, foreCollpase)
        : context.partials.someType(typeArgument),
    )
    .join(', ')}\\>`;
}
