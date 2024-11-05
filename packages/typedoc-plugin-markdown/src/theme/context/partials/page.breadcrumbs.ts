import { link } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import * as path from 'path';

export function breadcrumbs(this: MarkdownThemeContext): string {
  const md: string[] = [];

  const textContentMappings = this.options.getValue('textContentMappings');
  const fileExtension = this.options.getValue('fileExtension');
  const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

  if (
    this.page.url === this.page.project.url ||
    ((this.page.url === entryFileName || this.page.url === 'readme_.md') &&
      this.page.url.split(path.sep).length === 1)
  ) {
    return '';
  }

  const homeLabel = this.helpers.getProjectName(
    textContentMappings['breadcrumbs.home'],
    this.page,
  );

  md.push(
    link(
      homeLabel,
      this.getRelativeUrl(this.page?.project?.url || entryFileName),
    ),
  );

  const breadcrumb = (model: any) => {
    if (model?.parent?.parent) {
      breadcrumb(model.parent);
    }

    const getUrl = (model: any) => {
      if (model.readme) {
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
