import { backTicks } from '@plugin/theme/lib/markdown';
import { IntrinsicType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an IntrinsicType model to a string.
 *
 * @category Type Partials
 */
export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
