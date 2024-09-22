import { htmlTable, link, table } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import {
  Comment,
  DeclarationReflection,
  DocumentReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

export function groupIndex(
  this: MarkdownThemeContext,
  model: ReflectionGroup | ReflectionCategory,
): string {
  if (this.options.getValue('indexFormat').toLowerCase().includes('table')) {
    return getTable(
      this,
      model.children as DeclarationReflection[] | DocumentReflection[],
    );
  }
  return getList(
    this,
    model.children as DeclarationReflection[] | DocumentReflection[],
  );
}
function getList(
  context: MarkdownThemeContext,
  children: DeclarationReflection[] | DocumentReflection[],
) {
  const filteredChildren =
    children
      .filter((child) => Boolean(child.url))
      .map((child) => {
        return child.url
          ? `- ${link(escapeChars(child.name), context.getRelativeUrl(child.url))}`
          : '';
      }) || [];

  return filteredChildren.join('\n');
}

function getTable(
  context: MarkdownThemeContext,
  children: DeclarationReflection[] | DocumentReflection[],
) {
  const leftAlignHeadings = context.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const isHtmlTable = context.options.getValue('indexFormat') === 'htmlTable';

  const childKindStrings = children.map((child) =>
    ReflectionKind.singularString(child.kind),
  );

  const headers = [[...new Set(childKindStrings)].join(', ')];
  headers.push(context.i18n.theme_description());

  const rows: string[][] = [];
  children.forEach((child) => {
    const row: string[] = [];

    if (child.url) {
      row.push(
        link(escapeChars(child.name), context.getRelativeUrl(child.url)),
      );
    }

    const description = () => {
      if (child instanceof DocumentReflection) {
        return child.frontmatter.description as string;
      }

      const comment: Comment = child.comment || child.signatures?.[0]?.comment;

      if (!comment) {
        return '';
      }
      return isHtmlTable
        ? context.partials.comment(comment, {
            isTableColumn: true,
          })
        : context.helpers.getShortDescription(comment?.summary);
    };

    row.push(description() || '-');

    rows.push(row);
  });

  return isHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}
