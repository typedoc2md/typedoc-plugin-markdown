import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function typeDeclarationTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const { table } = context.markdown;
  const { formatTableDescriptionCol, stripLineBreaks, formatTableNameCol } =
    context.utils;

  const headers: string[] = [];

  headers.push(context.text.get('label.member'));

  headers.push(context.text.get('label.type'));

  headers.push(context.text.get('label.description'));

  const declarations = context.helpers.flattenDeclarations(props, true);

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(formatTableNameCol(declaration.name));

    row.push(
      context.partials
        .someType(declaration.type as SomeType)
        .replace(/\n/g, ' '),
    );

    const comments = declaration.comment;

    if (comments) {
      row.push(
        stripLineBreaks(
          formatTableDescriptionCol(context.partials.comment(comments)),
        ),
      );
    } else {
      row.push('-');
    }

    rows.push(row);
  });

  return table(headers, rows);
}
