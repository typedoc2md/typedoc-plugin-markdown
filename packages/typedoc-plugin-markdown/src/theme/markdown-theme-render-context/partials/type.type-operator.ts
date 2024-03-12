import { TypeOperatorType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an TypeOperatorType functions model to a string.
 *
 * @category Type Partials
 */
export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
): string {
  return `${model.operator} ${context.partials.someType(model.target)}`;
}
