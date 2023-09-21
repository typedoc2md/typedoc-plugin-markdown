import { ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
): string {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return context.functionType(root.signatures);
  }

  const expandObjects = context.options.getValue('expandObjects') as boolean;

  return expandObjects ? context.declarationType(root) : backTicks('object');
}
