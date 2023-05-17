import { IntrinsicType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';

export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
