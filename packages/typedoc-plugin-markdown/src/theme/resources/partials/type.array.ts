import { ArrayType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function arrayType(
  context: MarkdownThemeRenderContext,
  arrayType: ArrayType,
): string {
  const theType = context.partials.someType(arrayType.elementType);
  return arrayType.elementType.type === 'union'
    ? `(${theType})[]`
    : `${theType}[]`;
}
