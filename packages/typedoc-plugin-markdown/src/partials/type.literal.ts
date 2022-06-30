import { LiteralType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function literalType(
  context: MarkdownThemeRenderContext,
  literalType: LiteralType,
) {
  if (typeof literalType.value === 'bigint') {
    return `\`${literalType.value}n\``;
  }
  return `\`\`${JSON.stringify(literalType.value)}\`\``;
}
