import { MarkdownThemeContext } from 'theme';
import { TypeOperatorType } from 'typedoc';

export function typeOperatorType(
  this: MarkdownThemeContext,
  model: TypeOperatorType,
): string {
  return `${model.operator} ${this.partials.someType(model.target)}`;
}
