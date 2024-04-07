import { heading, link, table } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import * as path from 'path';
import { ProjectReflection } from 'typedoc';

/**
 * @category Page Partials
 */
export function packagesIndex(
  this: MarkdownThemeContext,
  model: ProjectReflection,
): string {
  const md: string[] = [];

  md.push(heading(2, this.getText('label.packages')));

  const includeVersion = model.children?.some((projectPackage) =>
    Boolean(projectPackage.packageVersion),
  );

  if (this.options.getValue('indexFormat') === 'table') {
    const headers = [this.getText('label.name')];
    if (includeVersion) {
      headers.push('Version');
    }
    headers.push('Description');

    const packageRows = model.children?.map((projectPackage) => {
      const packageMeta = this.getPackageMetaData(projectPackage.name);

      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${this.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;

      const rows = [
        urlTo
          ? link(escapeChars(projectPackage.name), this.getRelativeUrl(urlTo))
          : escapeChars(projectPackage.name),
      ];
      if (includeVersion) {
        rows.push(projectPackage.packageVersion || '-');
      }
      rows.push(packageMeta?.description || '-');

      return rows;
    });
    md.push(table(headers, packageRows || []));
  } else {
    const packagesList = model.children?.map((projectPackage) => {
      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${this.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;
      return urlTo
        ? `- ${link(
            `${escapeChars(projectPackage.name)}${projectPackage.packageVersion ? ` - v${projectPackage.packageVersion}` : ''}`,
            this.getRelativeUrl(urlTo),
          )}`
        : '';
    });
    md.push(packagesList?.join('\n') || '');
  }

  return md.join('\n\n');
}
