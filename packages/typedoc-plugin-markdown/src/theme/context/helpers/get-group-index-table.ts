import { link, table } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'public-api';
import {
  DeclarationReflection,
  DocumentReflection,
  ReflectionKind,
} from 'typedoc';

export function getGroupIndexTable(
  this: MarkdownThemeContext,
  children: DeclarationReflection[] | DocumentReflection[],
  kind?: ReflectionKind,
) {
  const leftAlignHeadings = this.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const childKindStrings = children.map((child) =>
    ReflectionKind.singularString(child.kind),
  );

  const headers = [[...new Set(childKindStrings)].join(', ')];
  headers.push(this.i18n.theme_description());

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
  return table(headers, rows, leftAlignHeadings);
}
