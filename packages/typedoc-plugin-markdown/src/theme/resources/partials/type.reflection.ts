import { ReflectionType } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
  collapse: boolean,
): string {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return context.functionType(root.signatures);
  }
  return collapse ? backTicks('object') : context.declarationType(root);
}
