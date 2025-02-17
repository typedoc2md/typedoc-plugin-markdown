import { backTicks, htmlTable, table } from '@plugin/libs/markdown/index.js';
import { removeLineBreaks } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  i18n,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';

export function enumMembersTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
): string {
  const tableColumnsOptions = this.options.getValue('tableColumnSettings');
  const leftAlignHeadings = tableColumnsOptions.leftAlignHeaders;
  const comments = model.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = comments.some((value) => Boolean(value));

  const hasSources =
    !tableColumnsOptions.hideSources &&
    !this.options.getValue('disableSources');

  const headers = [
    ReflectionKind.singularString(ReflectionKind.EnumMember),
    i18n.theme_value(),
  ];

  if (hasComments) {
    headers.push(i18n.theme_description());
  }

  if (hasSources) {
    headers.push(i18n.theme_defined_in());
  }

  const rows: string[][] = [];

  model.forEach((property: DeclarationReflection) => {
    const propertyType = this.helpers.getDeclarationType(property);

    const row: string[] = [];
    const nameColumn: string[] = [];

    if (this.router.hasUrl(property) && this.router.getAnchor(property)) {
      nameColumn.push(`<a id="${this.router.getAnchor(property)}"></a>`);
    }

    nameColumn.push(backTicks(property.name));

    row.push(nameColumn.join(' '));

    if (propertyType) {
      row.push(removeLineBreaks(this.partials.someType(propertyType)));
    }

    if (hasComments) {
      const comments = getComments(property);
      if (comments) {
        row.push(this.partials.comment(comments, { isTableColumn: true }));
      } else {
        row.push('-');
      }
    }

    if (hasSources) {
      row.push(this.partials.sources(property, { hideLabel: true }));
    }

    rows.push(row);
  });

  return this.options.getValue('enumMembersFormat') == 'table'
    ? table(headers, rows, leftAlignHeadings)
    : htmlTable(headers, rows, leftAlignHeadings);
}

function getComments(property: DeclarationReflection) {
  if (property.type instanceof ReflectionType) {
    if (property.type?.declaration?.signatures) {
      return property.type?.declaration.signatures[0].comment;
    }
  }
  if (property.signatures) {
    return property.signatures[0].comment;
  }
  return property.comment;
}
