import { UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';

export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return backTicks(model.name);
}
