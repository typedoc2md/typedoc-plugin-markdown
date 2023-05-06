import { IntrinsicType } from 'typedoc';
import { backTicks } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
) {
  return backTicks(model.name);
}
