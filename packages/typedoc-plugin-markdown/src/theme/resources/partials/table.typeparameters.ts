import { TypeParameterReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, table } from '../markdown';
import { formatTableDescriptionCol, stripLineBreaks } from '../utils';

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

  const headers = [context.getText('kind.typeParameter.singular')];

  if (hasDefault) {
    headers.push(context.getText('label.value'));
  }

  if (hasComments) {
    headers.push(context.getText('label.description'));
  }

  const rows: string[][] = [];
  typeParameters?.forEach((typeParameter) => {
    const row: string[] = [];

    const nameCol: string[] = [];

    nameCol.push(backTicks(typeParameter.name));

    if (typeParameter.type) {
      nameCol.push(`extends ${context.partials.someType(typeParameter.type)}`);
    }

    row.push(nameCol.join(' '));

    if (hasDefault) {
      if (typeParameter.default) {
        row.push(context.partials.someType(typeParameter.default));
      } else {
        row.push('-');
      }
    }

    if (hasComments) {
      if (typeParameter.comment) {
        row.push(
          stripLineBreaks(
            formatTableDescriptionCol(
              context.partials.comment(typeParameter.comment),
            ),
          ),
        );
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return table(headers, rows);
}
