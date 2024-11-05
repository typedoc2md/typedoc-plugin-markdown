import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { InferredType } from 'typedoc';

export function inferredType(
  this: MarkdownThemeContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
