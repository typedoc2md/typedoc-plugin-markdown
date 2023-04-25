import { TupleType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function tupleType(
  context: MarkdownThemeRenderContext,
  tupleType: TupleType,
) {
  return `[${tupleType.elements
    .map((element) => context.partials.someType(element))
    .join(', ')}]`;
}
