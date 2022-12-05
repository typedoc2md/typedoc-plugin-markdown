import { UnknownType } from 'typedoc';
import { backTicks } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
) {
  return backTicks(model.name);
}
