import { InferredType } from 'typedoc';
import { escapeChars } from '../../../support/utils';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
