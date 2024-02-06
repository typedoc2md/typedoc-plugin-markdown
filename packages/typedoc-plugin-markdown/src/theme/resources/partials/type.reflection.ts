import { ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../markdown';

export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
  foreCollpase = false,
) {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return context.partials.functionType(root.signatures);
  }

  const expandObjects =
    !foreCollpase && (context.options.getValue('expandObjects') as boolean);

  return expandObjects
    ? context.partials.declarationType(root)
    : backTicks('Object');
}
