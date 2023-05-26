import { UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return backTicks(model.name);
}
