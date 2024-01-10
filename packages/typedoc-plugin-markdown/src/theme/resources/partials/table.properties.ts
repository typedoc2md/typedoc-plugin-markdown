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
  isEventProps = false,
): string {
  const modifiers = props.map((param) => getModifier(param));
  const hasModifiers = modifiers.some((value) => Boolean(value));
  const hasOverrides = props.some((prop) => Boolean(prop.overwrites));
  const hasInheritance = props.some((prop) => Boolean(prop.inheritedFrom));
  const hasComments = props.some(
    (prop) => prop.comment?.blockTags?.length || prop?.comment?.summary?.length,
  );

  const headers: string[] = [];

  if (hasModifiers) {
    headers.push(context.getTextContent('label.modifier'));
  }

  headers.push(
    isEventProps
      ? context.getTextContent('kind.event.singular')
      : context.getTextContent('kind.property.singular'),
  );

  headers.push(context.getTextContent('label.type'));

  if (hasComments) {
    headers.push(context.getTextContent('label.description'));
  }

  if (hasOverrides) {
    headers.push(context.getTextContent('label.overrides'));
  }

  if (hasInheritance) {
    headers.push(context.getTextContent('label.inheritedFrom'));
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

    if (context.options.getValue('namedAnchors') && property.anchor) {
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

    if (hasComments) {
      const hasComment =
        property.comment?.blockTags?.length ||
        property?.comment?.summary?.length;
      const comments = property?.comment;
      if (hasComment && comments) {
        row.push(
          stripLineBreaks(formatTableDescriptionCol(context.comment(comments))),
        );
      } else {
        row.push('-');
      }
    }

    if (hasOverrides) {
      row.push(context.inheritance(property, -1) || '-');
    }

    if (hasInheritance) {
      row.push(context.inheritance(property, -1) || '-');
    }

    rows.push(row);
  });

  return table(headers, rows);
}
