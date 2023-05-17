import { TupleType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';

export function tupleType(
  context: MarkdownThemeRenderContext,
  tupleType: TupleType,
): string {
  return `[${tupleType.elements
    .map((element) => context.someType(element))
    .join(', ')}]`;
}
