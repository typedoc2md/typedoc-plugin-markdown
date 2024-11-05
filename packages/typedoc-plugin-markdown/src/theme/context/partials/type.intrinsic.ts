import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { IntrinsicType } from 'typedoc';

export function intrinsicType(
  this: MarkdownThemeContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
