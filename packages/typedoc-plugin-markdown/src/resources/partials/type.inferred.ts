import { InferredType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { escapeChars } from '../../support/utils';

export function inferredType(
  context: MarkdownThemeRenderContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
