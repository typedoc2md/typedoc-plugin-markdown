import { TypeParameterReflection } from 'typedoc';
import { italic, table } from '../../support/els';
import { tableComments } from '../../support/helpers';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function typeParametersTable(
  context: MarkdownThemeRenderContext,
  typeParameters: TypeParameterReflection[],
) {
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

    nameCol.push(typeParameter.name);

    if (typeParameter.type) {
      nameCol.push(
        `${italic('extends')} ${context.partials.someType(typeParameter.type)}`,
      );
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
          tableComments(context.partials.comment(typeParameter.comment)),
        );
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return table(headers, rows);
}
