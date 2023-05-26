import { InferredType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { escapeChars } from '../../../support/utils';

/**
 * @category Partials
 */
export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
