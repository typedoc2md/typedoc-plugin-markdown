import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, strikeThrough, table } from '../../../support/elements';
import {
  formatTableDescriptionCol,
  stripLineBreaks,
} from '../../../support/utils';
import {
  flattenDeclarations,
  getDeclarationType,
  getModifier,
} from '../../helpers';

/**
 * @category Partials
 */
export function propertiesTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const modifiers = props.map((param) => getModifier(param));
  const hasModifiers = modifiers.some((value) => Boolean(value));

  const inheritance = props.map(
    (reflection) =>
      Boolean(reflection.overwrites) || Boolean(reflection.inheritedFrom),
  );
  const hasInheritance = inheritance.some((value) => Boolean(value));
  const hasSources = !context.options.getValue('disableSources');

  const headers: string[] = [];

  if (hasModifiers) {
    headers.push('Modifier');
  }

  headers.push('Property');

  headers.push('Type');

  headers.push('Description');

  if (hasInheritance) {
    headers.push('Inheritance');
  }

  if (hasSources) {
    headers.push('Source');
  }

  const rows: string[][] = [];

  const declarations = flattenDeclarations(props);

  declarations.forEach((property: DeclarationReflection, index: number) => {
    const propertyType = getDeclarationType(property);
    const row: string[] = [];

    if (hasModifiers) {
      row.push(backTicks(modifiers[index] || 'public'));
    }

    const nameColumn: string[] = [];

    if (
      context.options.getValue('namedAnchors')?.tableRows &&
      property.anchor
    ) {
      nameColumn.push(
        `<a id="${property.anchor}" name="${property.anchor}"></a>`,
      );
    }

    const propertyName = `${property.name}${
      property.flags.isOptional ? '?' : ''
    }`;

    if (property.isDeprecated && property.isDeprecated()) {
      nameColumn.push(strikeThrough(backTicks(propertyName)));
    } else {
      nameColumn.push(backTicks(propertyName));
    }

    row.push(nameColumn.join(' '));

    if (propertyType) {
      row.push(stripLineBreaks(context.someType(propertyType), false));
    }

    const comments = property.comment;
    if (comments) {
      row.push(
        stripLineBreaks(formatTableDescriptionCol(context.comment(comments))),
      );
    } else {
      row.push('-');
    }

    if (hasInheritance) {
      row.push(context.inheritance(property, -1) || '-');
    }

    if (hasSources) {
      row.push(context.sources(property, -1));
    }

    rows.push(row);
  });

  return table(headers, rows);
}
