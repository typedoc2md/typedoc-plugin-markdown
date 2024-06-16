import { backTicks } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { IntrinsicType } from 'typedoc';

export function intrinsicType(
  this: MarkdownThemeContext,
  model: IntrinsicType,
): string {
  return backTicks(model.name);
}
