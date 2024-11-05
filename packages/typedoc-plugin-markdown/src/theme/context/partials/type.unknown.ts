import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { UnknownType } from 'typedoc';

export function unknownType(
  this: MarkdownThemeContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
