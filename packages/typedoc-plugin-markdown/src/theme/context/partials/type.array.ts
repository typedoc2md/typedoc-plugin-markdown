import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { needsParentheses } from '@plugin/theme/lib/index.js';
import { ArrayType } from 'typedoc';

export function arrayType(
  this: MarkdownThemeContext,
  model: ArrayType,
): string {
  const theType = this.partials.someType(model.elementType);
  return needsParentheses(model.elementType)
    ? `(${theType})[]`
    : `${theType}[]`;
}
