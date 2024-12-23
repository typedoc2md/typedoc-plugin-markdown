import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { TupleType } from 'typedoc';

export function tupleType(
  this: MarkdownThemeContext,
  model: TupleType,
): string {
  return `\\[${model.elements
    .map((element) => this.partials.someType(element, { forceCollapse: true }))
    .join(', ')}\\]`;
}
