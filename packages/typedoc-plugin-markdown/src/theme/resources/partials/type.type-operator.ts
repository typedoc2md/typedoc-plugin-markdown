import { MarkdownThemeRenderContext } from '@theme/render-context';
import { TypeOperatorType } from 'typedoc';

/**
 * @category Type Partials
 */
export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
): string {
  return `${model.operator} ${context.partials.someType(model.target)}`;
}
