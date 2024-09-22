import { htmlTable, link, table } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from 'theme';
import { ReflectionCategory } from 'typedoc';

export function categoryIndex(
  this: MarkdownThemeContext,
  model: ReflectionCategory[],
): string {
  if (this.options.getValue('indexFormat').toLowerCase().includes('table')) {
    return getTable(this, model);
  }
  return getList(this, model);
}

function getList(
  context: MarkdownThemeContext,
  categories: ReflectionCategory[],
) {
  const filteredChildren =
    categories.map((category) => {
      return `- [${category.title}](${context.getRelativeUrl((category as any).url)})`;
    }) || [];

  return filteredChildren.join('\n');
}

function getTable(context: MarkdownThemeContext, categories: any) {
  const leftAlignHeadings = context.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const isHtmlTable = context.options.getValue('indexFormat') === 'htmlTable';

  const headers = [
    categories[0] instanceof ReflectionCategory
      ? context.i18n.theme_category()
      : 'Group',
    context.i18n.theme_description(),
  ];

  const rows: string[][] = [];
  categories.forEach((category) => {
    const row: string[] = [];

    if ((category as any).url) {
      row.push(
        link(
          escapeChars((category as any).name),
          context.getRelativeUrl((category as any).url),
        ),
      );
    }

    row.push(
      category.description
        ? context.helpers.getShortDescription(category.description)
        : '-',
    );

    rows.push(row);
  });

  return isHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}
