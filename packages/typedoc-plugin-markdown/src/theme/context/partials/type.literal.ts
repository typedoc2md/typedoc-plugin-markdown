import { MarkdownThemeContext } from 'theme';
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
