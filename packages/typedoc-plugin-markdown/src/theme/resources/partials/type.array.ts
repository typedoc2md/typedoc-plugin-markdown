import { ArrayType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function arrayType(
  context: MarkdownThemeRenderContext,
  arrayType: ArrayType,
): string {
  const theType = context.someType(arrayType.elementType);
  return arrayType.elementType.type === 'union'
    ? `(${theType})[]`
    : `${theType}[]`;
}
