import { ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
  collapse: boolean,
  format: boolean,
): string {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return context.functionType(root.signatures);
  }
  return collapse ? backTicks('object') : context.declarationType(root, format);
}
