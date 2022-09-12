import { MarkdownThemeRenderContext } from './theme-context';

export const heading = (level: number, text: string) =>
  `${[...Array(level)].map(() => '#').join('')} ${text}`;

export const link = (label: string, url: string | null) =>
  url ? `[${label}](${url})` : '';

export const bold = (text: string) => `**${text}**`;

export const backTicks = (text: string) => `\`${text}\``;

export const unorderedList = <T>(items: T[]) =>
  items.map((item) => `- ${item}`).join('\n');

export function horizontalRule(context: MarkdownThemeRenderContext) {
  const hideHorizontalDivider = context.getOption('hideHorizontalDivider');

  if (hideHorizontalDivider) {
    return '\n\n';
  } else {
    return '\n\n---';
  }
}

export const table = (headers: string[], rows: string[][]) =>
  `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.map((row) => `| ${row.join(' | ')} \n`).join('')}`;
