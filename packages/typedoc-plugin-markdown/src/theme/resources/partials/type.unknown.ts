import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { UnknownType } from 'typedoc';

/**
 * @category Type Partials
 */
export function unknownType(
  this: MarkdownThemeContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
