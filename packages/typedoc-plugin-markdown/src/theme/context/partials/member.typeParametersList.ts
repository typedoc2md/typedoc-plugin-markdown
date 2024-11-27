import { bold, italic } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { TypeParameterReflection } from 'typedoc';

export function typeParametersList(
  this: MarkdownThemeContext,
  model: TypeParameterReflection[],
): string {
  const rows: string[] = [];
  model?.forEach((typeParameter) => {
    const row: string[] = [];

    const nameCol: string[] = [bold(typeParameter.name)];

    if (typeParameter.type) {
      nameCol.push(
        `${italic('extends')} ${this.partials.someType(typeParameter.type)}`,
      );
    }

    if (typeParameter.default) {
      nameCol.push(
        `= ${this.partials.someType(typeParameter.default, { forceCollapse: true })}`,
      );
    }

    row.push('• ' + nameCol.join(' '));

    if (typeParameter.comment) {
      row.push(this.partials.comment(typeParameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
