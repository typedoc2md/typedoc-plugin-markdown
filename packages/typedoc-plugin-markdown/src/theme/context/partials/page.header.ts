import { bold } from '@plugin/libs/markdown/bold.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { i18n } from 'typedoc';

export function header(this: MarkdownThemeContext): string {
  const md: string[] = [];

  const textContentMappings = this.options.getValue('textContentMappings');
  const mergeReadme = this.options.getValue('mergeReadme');

  const title = this.helpers.getProjectName(
    textContentMappings['header.title'],
    this.page,
  );

  const menu: string[] = [];

  if (this.page.project.readme && !mergeReadme) {
    md.push(bold(title));
    menu.push(
      `[${i18n.theme_readme()}](${this.relativeURL(this.router.readmeURL)})`,
    );
    menu.push(
      `[${i18n.theme_documentation()}](${this.urlTo(this.page.project)})`,
    );
    md.push(menu.join(' | '));
  } else {
    if (
      this.router.getFullUrl(this.page.model) !==
      this.relativeURL(this.router.entryUrl)
    ) {
      md.push(`[${bold(title)}](${this.relativeURL(this.router.entryUrl)})`);
    } else {
      md.push(bold(title));
    }
  }

  return `${md.join(' • ')}\n\n***\n`;
}
