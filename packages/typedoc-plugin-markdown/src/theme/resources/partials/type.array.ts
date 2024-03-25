import { MarkdownThemeRenderContext } from '@theme/render-context';
import { ArrayType } from 'typedoc';

/**
 * @category Type Partials
 */
export function arrayType(
  context: MarkdownThemeRenderContext,
  model: ArrayType,
): string {
  const theType = context.partials.someType(model.elementType);
  return model.elementType.type === 'union' ? `(${theType})[]` : `${theType}[]`;
}
