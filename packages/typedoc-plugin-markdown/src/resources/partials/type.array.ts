import { ArrayType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';

export function arrayType(
  context: MarkdownThemeRenderContext,
  arrayType: ArrayType,
): string {
  const theType = context.someType(arrayType.elementType, 'none');
  return arrayType.elementType.type === 'union'
    ? `(${theType})[]`
    : `${theType}[]`;
}
