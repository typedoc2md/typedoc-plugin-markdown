import { escapeChars } from '../utils';

/**
 * Wraps a string in backticks.
 * If the input string iself contains a backtick, pipe, or backslash (which can result in unwanted side effects) the string is escaoed unstead.
 */
export function backTicks(text: string) {
  return /(`|\||\\)/g.test(text) ? escapeChars(text) : `\`${text}\``;
}
