import { TypeParameterReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, italic, table } from '../../../support/elements';
import { stripLineBreaks, tableString } from '../../../support/utils';

/**
 * @category Partials
 */
export function typeParametersTable(
  context: MarkdownThemeRenderContext,
  typeParameters: TypeParameterReflection[],
): string {
  const hasDefault = typeParameters.some((typeParameter) =>
    Boolean(typeParameter.default),
  );

  const hasComments = typeParameters.some((typeParameter) =>
    Boolean(typeParameter.comment),
  );

  const headers = ['Parameter'];

  if (hasDefault) {
    headers.push('Default');
  }

  if (hasComments) {
    headers.push('Description');
  }

  const rows: string[][] = [];
  typeParameters?.forEach((typeParameter) => {
    const row: string[] = [];

    const nameCol: string[] = [];

    nameCol.push(backTicks(typeParameter.name));

    if (typeParameter.type) {
      nameCol.push(
        `${italic('extends')} ${context.someType(typeParameter.type)}`,
      );
    }

    row.push(nameCol.join(' '));

    if (hasDefault) {
      if (typeParameter.default) {
        row.push(context.someType(typeParameter.default));
      } else {
        row.push('-');
      }
    }

    if (hasComments) {
      if (typeParameter.comment) {
        row.push(
          stripLineBreaks(tableString(context.comment(typeParameter.comment))),
        );
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return table(headers, rows);
}
