export const markdown = () => {
  return {
    /**
     * Returns a heading in markdown format
     * @param level The level of the heading
     * @param text The text of the heading
     */
    heading: (level: number, text: string) => {
      level = level > 6 ? 6 : level;
      return `${[...Array(level)].map(() => '#').join('')} ${text}`;
    },
    /**
     *  The link element
     * @param label The text to display for the link
     * @param url The url to link to
     */
    link: (label: string, url: string | null) =>
      url ? `[${label}](${url})` : '',
    bold: (text: string) => `**${text}**`,

    italic: (text: string) => `*${text}*`,

    backTicks: (text: string) =>
      /(\`)/g.test(text) ? text.replace(/`/g, '\\`') : `\`${text}\``,

    unorderedList: <T>(items: T[]) =>
      items.map((item) => `- ${item}`).join('\n'),

    horizontalRule: () => '\n\n***\n\n',

    codeBlock: (content: string) => {
      const unEscapeChars = (str: string) => {
        return str
          .replace(/\\</g, '<')
          .replace(/\\>/g, '>')
          .replace(/\\_/g, '_')
          .replace(/\\{/g, '{')
          .replace(/`/g, '')
          .replace(/\*\*/g, '')
          .replace(/\\\|/g, '|')
          .replace(/\\\]/g, ']')
          .replace(/\\\[/g, '[')
          .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1');
      };
      const trimLastLine = (content: string) => {
        const lines = content.split('\n');
        return lines
          .map((line, index) =>
            index === lines.length - 1 ? line.trim() : line,
          )
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
    },

    strikeThrough: (content: string) => `~~${content}~~`,

    table: (headers: string[], rows: string[][]) =>
      `\n| ${headers.join(' | ')} |\n| ${headers
        .map(() => ':------')
        .join(' | ')} |\n${rows
        .map((row) => `| ${row.join(' | ')} |\n`)
        .join('')}`,

    blockQuoteBlock: (content: string) => {
      const lines = (
        content.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n'
      ).split('\n');
      return lines
        .map((line) => (line.length ? `> ${line.trim()}` : '>'))
        .join('\n');
    },

    indentBlock: (content: string) => {
      const lines = content.split('\n');
      return lines
        .filter((line) => Boolean(line.length))
        .map((line) => `    ${line}`)
        .join('\n');
    },
  };
};
