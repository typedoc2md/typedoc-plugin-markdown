import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
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
