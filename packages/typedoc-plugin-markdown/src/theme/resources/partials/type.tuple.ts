import { TupleType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function tupleType(
  context: MarkdownThemeRenderContext,
  tupleType: TupleType,
): string {
  return `[${tupleType.elements
    .map((element) => context.partials.someType(element))
    .join(', ')}]`;
}
