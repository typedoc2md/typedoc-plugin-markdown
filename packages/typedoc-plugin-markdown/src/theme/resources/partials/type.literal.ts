import { MarkdownThemeRenderContext } from '@theme/render-context';
import { LiteralType } from 'typedoc';

/**
 * @category Type Partials
 */
export function literalType(
  context: MarkdownThemeRenderContext,
  model: LiteralType,
): string {
  if (typeof model.value === 'bigint') {
    return `\`${model.value}n\``;
  }
  return `\`\`${JSON.stringify(model.value)}\`\``;
}
