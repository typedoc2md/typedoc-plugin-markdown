import { IntrinsicType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../markdown';

export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
