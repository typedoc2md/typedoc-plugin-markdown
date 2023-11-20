import { ReflectionType, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function typeArguments(
  context: MarkdownThemeRenderContext,
  typeArguments: SomeType[],
): string {
  return `\\<${typeArguments
    .map((typeArgument) =>
      typeArgument instanceof ReflectionType
        ? context.reflectionType(typeArgument)
        : context.someType(typeArgument),
    )
    .join(', ')}\\>`;
}
