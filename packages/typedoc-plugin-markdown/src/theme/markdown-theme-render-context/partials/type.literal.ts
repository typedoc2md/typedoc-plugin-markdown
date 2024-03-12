import { LiteralType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an LiteralType model to a string.
 *
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
