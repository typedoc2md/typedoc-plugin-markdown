export function unEscapeChars(str: string) {
  return str
    .replace(
      /(`[^`]*?)\\*([^`]*?`)/g,
      (match, p1, p2) => `${p1}${p2.replace(/\*/g, '\\*')}`,
    )
    .replace(/(?<!\\)\*/g, '')
    .replace(/\\</g, '<')
    .replace(/\\>/g, '>')
    .replace(/\\_/g, '_')
    .replace(/\\{/g, '{')
    .replace(/\\}/g, '}')
    .replace(/(?<!\\)`/g, '')
    .replace(/\\`/g, '`')
    .replace(/\\\*/g, '*')
    .replace(/\\\|/g, '|')
    .replace(/\\\]/g, ']')
    .replace(/\\\[/g, '[')
    .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1');
}
