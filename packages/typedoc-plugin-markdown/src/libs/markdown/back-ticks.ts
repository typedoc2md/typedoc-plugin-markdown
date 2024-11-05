import { escapeChars } from '@plugin/libs/utils/index.js';

/**
 * Wraps a string in backticks.
 * If the input string itself contains a backtick, pipe, or backslash (which can result in unwanted side effects) the string is escaped instead.
 */
export function backTicks(text: string) {
  return /(`|\||\\)/g.test(text) ? escapeChars(text) : `\`${text}\``;
}
