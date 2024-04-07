import { escapeChars } from '../utils';

/**
 * Wraps a string in backticks
 * - If string itslef contains backticks ignore.
 * - Additionally escapes pipes.
 * - When wrapping in backticks additionally escape pipes.
 */
export function backTicks(text: string) {
  return /(\`)/g.test(text)
    ? escapeChars(text)
    : `\`${text.replace(/\|/g, '\\|').replace(/\n/g, '\\n')}\``;
}
