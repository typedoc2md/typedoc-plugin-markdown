import { bold, italic } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
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
      nameCol.push(`= ${this.partials.someType(typeParameter.default)}`);
    }

    row.push('• ' + nameCol.join(' '));

    if (typeParameter.comment) {
      row.push(this.partials.comment(typeParameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
