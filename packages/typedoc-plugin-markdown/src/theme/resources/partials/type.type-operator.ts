import { TypeOperatorType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { italic } from '../../../support/elements';

/**
 * @category Partials
 */
export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
): string {
  return `${italic(model.operator)} ${context.someType(model.target)}`;
}
