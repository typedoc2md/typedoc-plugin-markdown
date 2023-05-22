import { UnknownType } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return backTicks(model.name);
}
