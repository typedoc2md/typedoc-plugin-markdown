import { ArrayType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an ArrayType model to a string.
 *
 * @category Type Partials
 */
export function arrayType(
  context: MarkdownThemeRenderContext,
  model: ArrayType,
): string {
  const theType = context.partials.someType(model.elementType);
  return model.elementType.type === 'union' ? `(${theType})[]` : `${theType}[]`;
}
