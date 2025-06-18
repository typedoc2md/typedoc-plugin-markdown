import {
  htmlTable,
  link,
  strikeThrough,
  table,
} from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  DocumentReflection,
  i18n,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

export function groupIndex(group: ReflectionGroup | ReflectionCategory) {
  if (this.options.getValue('indexFormat').toLowerCase().includes('table')) {
    return getGroupIndexTable(
      this,
      group.children,
    );
  }
  return getGroupIndexList(
    this,
    group.children,
  );
}

export function getGroupIndexList(
  context: MarkdownThemeContext,
  children: (DeclarationReflection | DocumentReflection)[],
) {
  const filteredChildren =
    children
      .filter((child) => context.router.hasUrl(child))
      .map((child) => {
        const name = child.isDeprecated()
          ? strikeThrough(escapeChars(child.name))
          : escapeChars(child.name);
        return context.router.hasUrl(child)
          ? `- ${link(name, context.urlTo(child))}`
          : '';
      }) || [];

  return filteredChildren.join('\n');
}

export function getGroupIndexTable(
  context: MarkdownThemeContext,
  children: (DeclarationReflection | DocumentReflection)[],
) {
  const leftAlignHeadings = context.options.getValue(
    'tableColumnSettings',
  ).leftAlignHeaders;

  const isHtmlTable = context.options.getValue('indexFormat') === 'htmlTable';

  const childKindStrings = children.map((child) =>
    ReflectionKind.singularString(child.kind),
  );

  const headerKinds = [...new Set(childKindStrings)];

  const headers = [headerKinds.length > 1 ? i18n.theme_name() : headerKinds[0]];

  headers.push(i18n.theme_description());

  const rows: string[][] = [];
  children.forEach((child) => {
    const row: string[] = [];

    if (context.router.getFullUrl(child)) {
      const name = child.isDeprecated()
        ? strikeThrough(escapeChars(child.name))
        : escapeChars(child.name);
      row.push(link(name, context.urlTo(child)));
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
        ? context.partials.comment(comment, {
            isTableColumn: true,
          })
        : context.helpers.getDescriptionForComment(comment);
    };

    row.push(description()?.trim() || '-');

    rows.push(row);
  });

  return isHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}
