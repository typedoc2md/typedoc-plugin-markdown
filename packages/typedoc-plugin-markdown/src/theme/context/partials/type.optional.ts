import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { needsParentheses } from '@plugin/theme/lib/index.js';
import { OptionalType } from 'typedoc';

export function optionalType(
  this: MarkdownThemeContext,
  model: OptionalType,
  options?: { forceCollapse?: boolean },
): string {
  const result = this.partials.someType(model.elementType, {
    forceCollapse: options?.forceCollapse,
  });
  return needsParentheses(model.elementType) ? `(${result})?` : `${result}?`;
}
