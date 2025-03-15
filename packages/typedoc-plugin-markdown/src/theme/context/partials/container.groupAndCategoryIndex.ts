import { htmlTable, link, table } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { i18n, Reflection, ReflectionCategory, ReflectionGroup } from 'typedoc';

export function groupAndCategoryIndex(
  this: MarkdownThemeContext,
  model: ReflectionCategory[] | ReflectionGroup[],
): string {
  if (this.options.getValue('indexFormat').toLowerCase().includes('table')) {
    return getTable(this, model);
  }
  return getList(this, model);
}

function getList(
  context: MarkdownThemeContext,
  items: ReflectionCategory[] | ReflectionGroup[],
) {
  const filteredChildren =
    items.map((item) => {
      return `- [${item.title}](${context.urlTo(item as unknown as Reflection)})`;
    }) || [];

  return filteredChildren.join('\n');
}

function getTable(
  context: MarkdownThemeContext,
  items: ReflectionCategory[] | ReflectionGroup[],
) {
  const leftAlignHeadings = context.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const isHtmlTable = context.options.getValue('indexFormat') === 'htmlTable';

  const headers = [i18n.theme_name(), i18n.theme_description()];

  const rows: string[][] = [];
  items.forEach((item) => {
    const row: string[] = [];
    const categoryUrl = context.urlTo(item as any);
    if (categoryUrl) {
      row.push(link(escapeChars((item as any).name), categoryUrl));
    }

    row.push(
      item.description
        ? context.helpers.getCommentParts(item.description)
        : '-',
    );

    rows.push(row);
  });

  return isHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}
