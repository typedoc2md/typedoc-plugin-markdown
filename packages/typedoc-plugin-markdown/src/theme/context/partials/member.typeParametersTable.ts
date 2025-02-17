import {
  backTicks,
  htmlTable,
  italic,
  table,
} from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { i18n, ReflectionKind, TypeParameterReflection } from 'typedoc';

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

  const headers = [ReflectionKind.singularString(ReflectionKind.TypeParameter)];

  if (hasDefault) {
    headers.push(i18n.theme_default_type());
  }

  if (hasComments) {
    headers.push(i18n.theme_description());
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
