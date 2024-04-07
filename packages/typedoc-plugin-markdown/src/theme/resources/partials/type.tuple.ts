import { MarkdownThemeContext } from '@plugin/theme';
import { TupleType } from 'typedoc';

/**
 * @category Type Partials
 */
export function tupleType(
  this: MarkdownThemeContext,
  model: TupleType,
): string {
  return `[${model.elements
    .map((element) => this.partials.someType(element))
    .join(', ')}]`;
}
