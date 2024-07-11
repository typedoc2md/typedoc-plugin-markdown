import { htmlTable, link, table } from 'libs/markdown';
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
) {
  const leftAlignHeadings = this.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const isHtmlTable = this.options.getValue('indexFormat') === 'htmlTable';

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

    const description = () => {
      if (child instanceof DocumentReflection) {
        return child.frontmatter.description as string;
      }

      const comment = this.helpers.getCommentForReflection(child);

      if (!comment) {
        return '';
      }
      return isHtmlTable
        ? this.partials.comment(comment, {
            isTableColumn: true,
          })
        : this.helpers.getDescriptionForComment(comment);
    };

    row.push(description() || '-');

    rows.push(row);
  });

  return isHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}
