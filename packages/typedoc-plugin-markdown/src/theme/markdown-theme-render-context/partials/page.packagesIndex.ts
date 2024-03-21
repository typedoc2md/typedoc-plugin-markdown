import { MarkdownThemeRenderContext } from '@plugin/theme';
import { heading, link, table } from '@plugin/theme/lib/markdown';
import { escapeChars } from '@plugin/theme/lib/utils';
import * as path from 'path';
import { ProjectReflection } from 'typedoc';

/**
 * Renders the page title.
 *
 * @category Page Partials
 */
export function packagesIndex(
  context: MarkdownThemeRenderContext,
  model: ProjectReflection,
): string {
  const md: string[] = [];

  md.push(heading(2, context.helpers.getText('label.packages')));

  const includeVersion = model.children?.some((projectPackage) =>
    Boolean(projectPackage.packageVersion),
  );

  if (context.options.getValue('indexFormat') === 'table') {
    const headers = [context.helpers.getText('label.name')];
    if (includeVersion) {
      headers.push('Version');
    }
    headers.push('Description');

    const packageRows = model.children?.map((projectPackage) => {
      const packageMeta = context.helpers.getPackagesMeta(projectPackage.name);

      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${context.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;

      const rows = [
        urlTo
          ? link(
              escapeChars(projectPackage.name),
              context.helpers.getRelativeUrl(urlTo),
            )
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
        ? `${path.dirname(projectPackage.url || '')}/${context.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;
      return urlTo
        ? `- ${link(
            `${escapeChars(projectPackage.name)}${projectPackage.packageVersion ? ` - v${projectPackage.packageVersion}` : ''}`,
            context.helpers.getRelativeUrl(urlTo),
          )}`
        : '';
    });
    md.push(packagesList?.join('\n') || '');
  }

  return md.join('\n\n');
}
