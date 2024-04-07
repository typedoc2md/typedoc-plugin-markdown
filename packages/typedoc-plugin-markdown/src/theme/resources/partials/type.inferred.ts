import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { InferredType } from 'typedoc';

/**
 * @category Type Partials
 */
export function inferredType(
  this: MarkdownThemeContext,
  model: InferredType,
): string {
  return `infer ${escapeChars(model.name)}`;
}
