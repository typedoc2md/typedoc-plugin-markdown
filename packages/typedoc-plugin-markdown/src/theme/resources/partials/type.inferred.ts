import { escapeChars } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { InferredType } from 'typedoc';

/**
 * @category Type Partials
 */
export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
