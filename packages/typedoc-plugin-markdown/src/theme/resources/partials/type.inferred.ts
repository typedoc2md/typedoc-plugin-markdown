import { InferredType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { escapeChars } from '../utils';

export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
