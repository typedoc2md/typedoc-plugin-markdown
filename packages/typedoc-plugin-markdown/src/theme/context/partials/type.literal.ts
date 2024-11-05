import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { LiteralType } from 'typedoc';

export function literalType(
  this: MarkdownThemeContext,
  model: LiteralType,
): string {
  if (typeof model.value === 'bigint') {
    return `\`${model.value}n\``;
  }
  return `\`\`${JSON.stringify(model.value)}\`\``;
}
