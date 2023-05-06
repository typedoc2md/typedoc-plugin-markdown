import { ArrayType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function arrayType(
  context: MarkdownThemeRenderContext,
  arrayType: ArrayType,
) {
  const theType = context.partials.someType(arrayType.elementType, 'none');
  return arrayType.elementType.type === 'union'
    ? `(${theType})[]`
    : `${theType}[]`;
}
