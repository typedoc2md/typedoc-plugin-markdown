/**
 * Very cool back ticks
 * @param text The backtick text
 */
export function backTicks(text: string) {
  return /(\`)/g.test(text) ? text.replace(/`/g, '\\`') : `\`${text}\``;
}
