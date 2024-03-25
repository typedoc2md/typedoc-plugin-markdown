import { backTicks } from '@theme/lib/markdown';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { IntrinsicType } from 'typedoc';

/**
 * @category Type Partials
 */
export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
