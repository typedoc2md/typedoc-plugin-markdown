import { TypeParameterReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { bold, italic } from '../../../support/elements';

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

    //row.push(heading(headingLevel, typeParameter.name));

    const nameCol: string[] = [bold(typeParameter.name)];

    if (typeParameter.type) {
      nameCol.push(
        `${italic('extends')} ${context.someType(typeParameter.type)}`,
      );
    }

    if (typeParameter.default) {
      nameCol.push(`= ${context.someType(typeParameter.default)}`);
    }

    row.push('> ' + nameCol.join(' '));

    if (typeParameter.comment) {
      row.push(context.comment(typeParameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
