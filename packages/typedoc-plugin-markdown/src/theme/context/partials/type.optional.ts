import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { OptionalType } from 'typedoc';

export function optionalType(
  this: MarkdownThemeContext,
  model: OptionalType,
): string {
  const result = this.partials.someType(model.elementType);
  return model.elementType.type === 'union' ? `(${result})?` : `${result}?`;
}
