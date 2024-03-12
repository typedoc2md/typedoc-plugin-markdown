export function codeBlock(content: string) {
  const unEscapeChars = (str: string) => {
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
      .replace(/`/g, '')
      .replace(/\\\*/g, '*')
      .replace(/\\\|/g, '|')
      .replace(/\\\]/g, ']')
      .replace(/\\\[/g, '[')
      .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1');
  };
  const trimLastLine = (content: string) => {
    const lines = content.split('\n');
    return lines
      .map((line, index) => (index === lines.length - 1 ? line.trim() : line))
      .join('\n');
  };
  const trimmedContent =
    content.endsWith('}') ||
    content.endsWith('};') ||
    content.endsWith('>') ||
    content.endsWith('>;')
      ? trimLastLine(content)
      : content;
  return '```ts\n' + unEscapeChars(trimmedContent) + '\n```';
}
