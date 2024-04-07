import { link } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import * as path from 'path';

/**
 * @category Page Partials
 */
export function breadcrumbs(this: MarkdownThemeContext): string {
  const md: string[] = [];

  const fileExtension = this.options.getValue('fileExtension');
  const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

  if (
    this.page.url === this.page.project.url ||
    ((this.page.url === entryFileName || this.page.url === 'readme_.md') &&
      this.page.url.split(path.sep).length === 1)
  ) {
    return '';
  }

  const name = this.page.project.name;
  const version = this.page.project.packageVersion;

  const homeLabel = this.getText('breadcrumbs.home')
    .replace('{projectName}', name)
    .replace('{version}', version ? `v${version}` : '')
    .replace(/\s+/g, ' ')
    .trim();

  md.push(link(homeLabel, this.getRelativeUrl(entryFileName)));

  const breadcrumb = (model: any) => {
    if (model?.parent?.parent) {
      breadcrumb(model.parent);
    }

    const getUrl = (model: any) => {
      if (Boolean(model.readme)) {
        return `${path.dirname(model.url)}/${entryFileName}`;
      }
      return model.url;
    };
    if (model.name !== this.options.getValue('entryModule')) {
      md.push(
        link(escapeChars(model.name), this.getRelativeUrl(getUrl(model))),
      );
    }
  };

  const pageName = escapeChars(this.page.model.name);

  if (
    this.page.model?.parent?.parent &&
    (this.page.url !== this.page.project.url || this.page.url !== entryFileName)
  ) {
    breadcrumb(this.page.model.parent);
  }

  md.push(pageName);

  return md.length > 1 ? `${md.join(' / ')}` : '';
}
