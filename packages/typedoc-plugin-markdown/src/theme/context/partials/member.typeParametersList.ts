import { heading, italic } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { TypeParameterReflection } from 'typedoc';

export function typeParametersList(
  this: MarkdownThemeContext,
  model: TypeParameterReflection[],
  options: { headingLevel: number },
): string {
  const rows: string[] = [];
  model?.forEach((typeParameter) => {
    const row: string[] = [];

    row.push(heading(options.headingLevel + 1, typeParameter.name));

    const nameCol: string[] = [];

    if (typeParameter.type) {
      nameCol.push(
        `${italic('extends')}: ${this.partials.someType(typeParameter.type)}`,
      );
    }

    if (typeParameter.default) {
      nameCol.push(
        `${this.i18n.theme_default_type()} ${this.partials.someType(typeParameter.default)}`,
      );
    }

    row.push(nameCol.join(''));

    if (typeParameter.comment) {
      row.push(this.partials.comment(typeParameter.comment));
    } else {
      if (nameCol.join('').length === 0) {
        row.push('\\-');
      }
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
