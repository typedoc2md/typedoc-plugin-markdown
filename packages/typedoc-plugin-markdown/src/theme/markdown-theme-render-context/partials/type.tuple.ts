import { TupleType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an TupleType functions model to a string.
 *
 * @category Type Partials
 */
export function tupleType(
  context: MarkdownThemeRenderContext,
  model: TupleType,
): string {
  return `[${model.elements
    .map((element) => context.partials.someType(element))
    .join(', ')}]`;
}
