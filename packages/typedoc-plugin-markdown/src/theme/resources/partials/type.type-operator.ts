import { TypeOperatorType } from 'typedoc';
import { italic } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
): string {
  return `${italic(model.operator)} ${context.someType(model.target)}`;
}
