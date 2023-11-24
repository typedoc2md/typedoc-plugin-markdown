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
        ? context.reflectionType(typeArgument, foreCollpase)
        : context.someType(typeArgument, foreCollpase),
    )
    .join(', ')}\\>`;
}
