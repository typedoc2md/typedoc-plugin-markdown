export function bold(text: string) {
  //if string contain backtick then return as it is
  return /(\`)/g.test(text) ? text : `**${text}**`;
}
