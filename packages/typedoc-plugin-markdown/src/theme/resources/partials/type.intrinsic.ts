import { IntrinsicType } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
