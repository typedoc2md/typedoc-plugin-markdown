import { backTicks } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { IntrinsicType } from 'typedoc';

/**
 * @category Type Partials
 */
export function intrinsicType(
  this: MarkdownThemeContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
