import { IntrinsicType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
