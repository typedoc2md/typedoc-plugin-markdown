import { heading, link, table } from '@plugin/libs/markdown';
import { escapeChars, getFileNameWithExtension } from '@plugin/libs/utils';
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
  const tableColumnsOptions = this.options.getValue('tableColumns');

  const md: string[] = [];

  md.push(heading(2, this.i18n.theme_packages()));

  const includeVersion = model.children?.some((projectPackage) =>
    Boolean(projectPackage.packageVersion),
  );

  const fileExtension = this.options.getValue('fileExtension');

  const entryFileName = getFileNameWithExtension(
    this.options.getValue('entryFileName'),
    fileExtension,
  );

  if (this.options.getValue('indexFormat') === 'table') {
    const headers = [this.i18n.theme_name()];
    if (includeVersion) {
      headers.push(this.i18n.theme_version());
    }
    headers.push(this.i18n.theme_description());

    const packageRows = model.children?.map((projectPackage) => {
      const packageMeta = this.getPackageMetaData(projectPackage.name);

      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${entryFileName}`
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
    md.push(
      table(headers, packageRows || [], tableColumnsOptions.leftAlignHeadings),
    );
  } else {
    const packagesList = model.children?.map((projectPackage) => {
      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${entryFileName}`
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
