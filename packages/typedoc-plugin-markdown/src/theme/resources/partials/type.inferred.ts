import { InferredType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  const { escapeChars } = context.utils;
  return `infer ${escapeChars(model.name)}`;
}
