import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { table } from '../../../support/elements';
import {
  formatTableDescriptionCol,
  formatTableNameCol,
  stripLineBreaks,
} from '../../../support/utils';
import { flattenDeclarations } from '../../helpers';

/**
 * @category Partials
 */
export function typeDeclarationTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const headers: string[] = [];

  headers.push(context.getTextContent('label.member'));

  headers.push(context.getTextContent('label.type'));

  headers.push(context.getTextContent('label.description'));

  const declarations = flattenDeclarations(props, true);

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(formatTableNameCol(declaration.name));

    row.push(
      context.someType(declaration.type as SomeType).replace(/\n/g, ' '),
    );

    const comments = declaration.comment;

    if (comments) {
      row.push(
        stripLineBreaks(formatTableDescriptionCol(context.comment(comments))),
      );
    } else {
      row.push('-');
    }

    rows.push(row);
  });

  return table(headers, rows);
}
