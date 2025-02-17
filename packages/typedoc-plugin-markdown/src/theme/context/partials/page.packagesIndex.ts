import { htmlTable, link, table } from '@plugin/libs/markdown/index.js';
import { escapeChars, replaceFilename } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, i18n, ProjectReflection } from 'typedoc';

export function packagesIndex(
  this: MarkdownThemeContext,
  model: ProjectReflection,
): string {
  const leftAlignHeadings = this.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const md: string[] = [];

  const includeVersion = model.children?.some((projectPackage) =>
    Boolean(projectPackage.packageVersion),
  );

  if (this.options.getValue('indexFormat').toLowerCase().includes('table')) {
    const headers = [i18n.theme_package()];
    if (includeVersion) {
      headers.push(i18n.theme_version());
    }
    headers.push(i18n.theme_description());

    const packageRows = model.children?.map((projectPackage) => {
      const packageMeta = this.getPackageMetaData(projectPackage.name);
      const rows = [
        link(
          `${escapeChars(projectPackage.name)}`,
          getPackageLink(this, projectPackage),
        ),
      ];
      if (includeVersion) {
        rows.push(projectPackage.packageVersion || '-');
      }
      rows.push(packageMeta?.description || '-');
      return rows;
    });
    const output =
      this.options.getValue('indexFormat') === 'htmlTable'
        ? htmlTable(headers, packageRows || [], leftAlignHeadings)
        : table(headers, packageRows || [], leftAlignHeadings);
    md.push(output);
  } else {
    const packagesList = model.children?.map((projectPackage) => {
      return this.router.hasUrl(projectPackage)
        ? `- ${link(
            `${escapeChars(projectPackage.name)}${projectPackage.packageVersion ? ` - v${projectPackage.packageVersion}` : ''}`,
            getPackageLink(this, projectPackage),
          )}`
        : '';
    });
    md.push(packagesList?.join('\n') || '');
  }

  return md.join('\n\n');
}

function getPackageLink(
  context: MarkdownThemeContext,
  reflection: DeclarationReflection,
) {
  const packageEntryModule = context.router.getPackageEntryModule(reflection);

  if (packageEntryModule) {
    return context.urlTo(packageEntryModule);
  }

  if (reflection.readme?.length && !context.options.getValue('mergeReadme')) {
    return replaceFilename(
      context.urlTo(reflection),
      context.router.getModulesFileName(reflection),
    );
  }

  return replaceFilename(
    context.urlTo(reflection),
    context.router.getPackageEntryFileName(reflection) || '',
  );
}
