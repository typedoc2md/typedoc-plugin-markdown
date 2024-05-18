import { link, table } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from 'public-api';
import {
  DeclarationReflection,
  DocumentReflection,
  ReflectionKind,
} from 'typedoc';

export function getGroupIndexTable(
  this: MarkdownThemeContext,
  children: DeclarationReflection[] | DocumentReflection[],
) {
  const tableColumnsOptions = this.options.getValue('tableColumns');
  const headers = [
    this.options.getValue('excludeGroups')
      ? this.i18n.theme_member()
      : ReflectionKind.singularString(children[0].kind),
    this.i18n.theme_description(),
  ];
  const rows: string[][] = [];
  children.forEach((child) => {
    const row: string[] = [];

    if (child.url) {
      row.push(link(escapeChars(child.name), this.getRelativeUrl(child.url)));
    }
    const description =
      child instanceof DeclarationReflection
        ? this.helpers.getDescriptionForReflection(child)
        : ((child as DocumentReflection).frontmatter.description as string);

    row.push(description || '-');

    rows.push(row);
  });
  return table(headers, rows, tableColumnsOptions.leftAlignHeadings);
}
