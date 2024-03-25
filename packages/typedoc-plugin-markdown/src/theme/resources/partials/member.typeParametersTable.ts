import { backTicks, table } from '@theme/lib/markdown';
import { formatTableDescriptionCol } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { TypeParameterReflection } from 'typedoc';

/**
 * @category Member Partials
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

  const headers = [context.helpers.getText('kind.typeParameter.singular')];

  if (hasDefault) {
    headers.push(context.helpers.getText('label.value'));
  }

  if (hasComments) {
    headers.push(context.helpers.getText('label.description'));
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
          formatTableDescriptionCol(
            context.partials.comment(typeParameter.comment),
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
