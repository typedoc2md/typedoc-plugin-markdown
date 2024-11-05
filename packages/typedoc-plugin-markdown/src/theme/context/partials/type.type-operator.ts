import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { TypeOperatorType } from 'typedoc';

export function typeOperatorType(
  this: MarkdownThemeContext,
  model: TypeOperatorType,
): string {
  return `${model.operator} ${this.partials.someType(model.target)}`;
}
