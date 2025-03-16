import { bold, link } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import * as path from 'path';

export function header(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');

  const fileExtension = this.options.getValue('fileExtension');
  const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

  const md: string[] = [];

  const title = this.helpers.getProjectName(
    textContentMappings['header.title'],
    this.page,
  );

  if (this.page.url === entryFileName) {
    md.push(bold(title));
  } else {
    md.push(link(bold(title), this.relativeURL(entryFileName)));
  }

  return `${md.join(' • ')}\n\n***\n`;
}
