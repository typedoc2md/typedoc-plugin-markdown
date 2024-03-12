import { escapeChars } from '@plugin/theme/lib/utils';
import { InferredType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an InferredType model to a string.
 *
 * @category Type Partials
 */
export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
