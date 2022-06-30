import { InferredType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';
import { escapeChars } from '../utils';

export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
) {
  return `infer ${escapeChars(model.name)}`;
}
