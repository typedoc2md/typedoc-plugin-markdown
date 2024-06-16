import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { InferredType } from 'typedoc';

export function inferredType(
  this: MarkdownThemeContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
