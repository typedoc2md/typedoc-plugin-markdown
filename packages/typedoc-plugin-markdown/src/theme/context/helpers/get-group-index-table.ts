import { htmlTable, link, table } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
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

      const comment = child.comment || child.signatures?.[0]?.comment;

      if (!comment) {
        return null;
      }
      return isHtmlTable
        ? this.partials.comment(comment, {
            isTableColumn: true,
          })
        : this.helpers.getDescriptionForComment(comment);
    };

    row.push(description()?.trim() || '-');

    rows.push(row);
  });

  return isHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}
