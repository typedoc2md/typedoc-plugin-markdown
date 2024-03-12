import { table } from '@plugin/theme/lib/markdown';
import {
  escapeChars,
  formatTableDescriptionCol,
  formatTableNameCol,
} from '@plugin/theme/lib/utils';
import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders type declarations as a table.
 *
 * @category Member Partials
 */
export function typeDeclarationTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const headers: string[] = [];

  const declarations = context.helpers.flattenDeclarations(props, true);

  const hasComments = declarations.some((declaration) =>
    Boolean(declaration.comment),
  );

  const hasDefaultValues = declarations.some((declaration) =>
    Boolean(declaration.defaultValue),
  );

  headers.push(context.helpers.getText('label.member'));

  headers.push(context.helpers.getText('label.type'));

  if (hasDefaultValues) {
    headers.push(context.helpers.getText('label.value'));
  }

  if (hasComments) {
    headers.push(context.helpers.getText('label.description'));
  }

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(formatTableNameCol(declaration.name));

    row.push(
      context.partials
        .someType(declaration.type as SomeType)
        .replace(/\n/g, ' '),
    );

    if (hasDefaultValues) {
      row.push(
        escapeChars(
          !declaration.defaultValue || declaration.defaultValue === '...'
            ? '-'
            : declaration.defaultValue,
        ),
      );
    }

    if (hasComments) {
      const comments = declaration.comment;

      if (comments) {
        row.push(formatTableDescriptionCol(context.partials.comment(comments)));
      } else {
        row.push('-');
      }
    }

    rows.push(row);
  });

  return table(headers, rows);
}
