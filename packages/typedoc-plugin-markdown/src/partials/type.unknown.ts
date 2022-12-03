import { UnknownType } from 'typedoc';
import { backTicks } from '../els';
import { MarkdownThemeRenderContext } from '../theme-context';
import { escapeChars } from '../utils';

export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
) {
  return backTicks(model.name);
}
