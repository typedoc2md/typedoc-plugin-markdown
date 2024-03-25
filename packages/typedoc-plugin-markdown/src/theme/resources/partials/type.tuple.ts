import { MarkdownThemeRenderContext } from '@theme/render-context';
import { TupleType } from 'typedoc';

/**
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
