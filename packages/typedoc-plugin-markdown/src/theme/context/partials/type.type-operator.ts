import { MarkdownThemeContext } from 'theme';
import { TypeOperatorType } from 'typedoc';

/**
 * @category Type Partials
 */
export function typeOperatorType(
  this: MarkdownThemeContext,
  model: TypeOperatorType,
): string {
  return `${model.operator} ${this.partials.someType(model.target)}`;
}
