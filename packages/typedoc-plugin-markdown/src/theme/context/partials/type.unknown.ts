import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { UnknownType } from 'typedoc';

export function unknownType(
  this: MarkdownThemeContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
