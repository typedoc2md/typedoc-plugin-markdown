import { backTicks, htmlTable, italic, table } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ReflectionKind, TypeParameterReflection } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeParametersTable(
  this: MarkdownThemeContext,
  model: TypeParameterReflection[],
): string {
  const tableColumnsOptions = this.options.getValue('tableColumnSettings');

  const hasDefault =
    !tableColumnsOptions.hideDefaults &&
    model.some((typeParameter) => Boolean(typeParameter.default));

  const hasComments = model.some((typeParameter) =>
    Boolean(typeParameter.comment),
  );

  const headers = [
    this.internationalization.kindSingularString(ReflectionKind.TypeParameter),
  ];

  if (hasDefault) {
    headers.push(this.i18n.theme_default_type());
  }

  if (hasComments) {
    headers.push(this.i18n.theme_description());
  }
  const rows: string[][] = [];
  model?.forEach((typeParameter) => {
    const row: string[] = [];

    const nameCol: string[] = [];

    nameCol.push(backTicks(typeParameter.name));

    if (typeParameter.type) {
      nameCol.push(
        `${italic('extends')} ${this.partials.someType(typeParameter.type)}`,
      );
    }

    row.push(nameCol.join(' '));

    if (hasDefault) {
      if (typeParameter.default) {
        row.push(this.partials.someType(typeParameter.default));
      } else {
        row.push('-');
      }
    }

    if (hasComments) {
      if (typeParameter.comment) {
        row.push(
          this.partials.comment(typeParameter.comment, {
            isTableColumn: true,
          }),
        );
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return this.options.getValue('parametersFormat') == 'table'
    ? table(headers, rows, tableColumnsOptions.leftAlignHeaders)
    : htmlTable(headers, rows, tableColumnsOptions.leftAlignHeaders);
}
