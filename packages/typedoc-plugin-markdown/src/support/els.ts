import { formatContents, unEscapeChars } from './utils';

export const heading = (level: number, text: string) =>
  `${[...Array(level)].map(() => '#').join('')} ${text}`;

export const link = (label: string, url: string | null) =>
  url ? `[${label}](${url})` : '';

export const bold = (text: string) => `**${text}**`;

export const italic = (text: string) => `*${text}*`;

export const backTicks = (text: string) => `\`${text}\``;

export const unorderedList = <T>(items: T[]) =>
  items.map((item) => `- ${item}`).join('\n');

export const horizontalRule = () => '\n\n---';

export const codeBlock = (content: string) =>
  '```ts\n' + unEscapeChars(content) + '\n```';

export const table = (headers: string[], rows: string[][]) =>
  `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.map((row) => `| ${row.join(' | ')} \n`).join('')}`;

export const blockQuoteBlock = (content: string) => {
  const lines = formatContents(content).split('\n');
  return lines.map((line) => (line.length ? `> ${line}` : '>')).join('\n');
};

export const indentBlock = (content: string) => {
  const lines = formatContents(content).split('\n');
  return lines
    .filter((line) => Boolean(line.length))
    .map((line) => `    ${line}`)
    .join('\n');
};
