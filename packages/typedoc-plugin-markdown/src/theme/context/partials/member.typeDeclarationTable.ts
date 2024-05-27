import { backTicks, htmlTable, table } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeDeclarationTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
): string {
  const tableColumnsOptions = this.options.getValue('tableColumnSettings');
  const leftAlignHeadings = tableColumnsOptions.leftAlignHeaders;

  const hasSources =
    !tableColumnsOptions.hideSources &&
    !this.options.getValue('disableSources');

  const headers: string[] = [];

  const declarations = this.helpers.getFlattenedDeclarations(model, {
    includeSignatures: true,
  });

  const hasDefaultValues = declarations.some((declaration) =>
    Boolean(declaration.defaultValue),
  );

  const hasComments = declarations.some((declaration) =>
    Boolean(declaration.comment),
  );

  headers.push(this.i18n.theme_member());

  headers.push(this.i18n.theme_type());

  if (hasDefaultValues) {
    headers.push(this.i18n.theme_value());
  }

  if (hasComments) {
    headers.push(this.i18n.theme_description());
  }

  if (hasSources) {
    headers.push(this.i18n.theme_defined_in());
  }

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(backTicks(declaration.name));

    row.push(this.partials.someType(declaration.type));

    if (hasDefaultValues) {
      row.push(
        escapeChars(!declaration.defaultValue ? '-' : declaration.defaultValue),
      );
    }

    if (hasComments) {
      const comments = declaration.comment;

      if (comments) {
        row.push(this.partials.comment(comments, { isTableColumn: true }));
      } else {
        row.push('-');
      }
    }

    if (hasSources) {
      row.push(this.partials.sources(declaration, { headingLevel: -1 }));
    }

    rows.push(row);
  });

  return this.options.getValue('typeDeclarationFormat') == 'table'
    ? table(headers, rows, leftAlignHeadings)
    : htmlTable(headers, rows, leftAlignHeadings);
}
