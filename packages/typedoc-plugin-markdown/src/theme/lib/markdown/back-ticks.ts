export function backTicks(text: string) {
  return /(\`)/g.test(text) ? `\`\`${text}\`\`` : `\`${text}\``;
}
