import { TypeParameterReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { bold } from '../../../support/elements';

/**
 * @category Partials
 */
export function typeParametersList(
  context: MarkdownThemeRenderContext,
  typeParameters: TypeParameterReflection[],
  headingLevel: number,
): string {
  const rows: string[] = [];
  typeParameters?.forEach((typeParameter) => {
    const row: string[] = [];

    const nameCol: string[] = [bold(typeParameter.name)];

    if (typeParameter.type) {
      nameCol.push(`extends ${context.someType(typeParameter.type)}`);
    }

    if (typeParameter.default) {
      nameCol.push(`= ${context.someType(typeParameter.default)}`);
    }

    row.push('• ' + nameCol.join(' '));

    if (typeParameter.comment) {
      row.push(context.comment(typeParameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
