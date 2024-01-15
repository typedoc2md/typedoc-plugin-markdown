import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function propertiesTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
  isEventProps = false,
): string {
  const { backTicks, table, strikeThrough } = context.markdown;
  const { formatTableDescriptionCol, stripLineBreaks } = context.utils;

  const modifiers = props.map((param) => context.helpers.getModifier(param));
  const hasModifiers = modifiers.some((value) => Boolean(value));
  const hasOverrides = props.some((prop) => Boolean(prop.overwrites));
  const hasInheritance = props.some((prop) => Boolean(prop.inheritedFrom));
  const hasComments = props.some(
    (prop) => prop.comment?.blockTags?.length || prop?.comment?.summary?.length,
  );

  const headers: string[] = [];

  if (hasModifiers) {
    headers.push(context.text.get('label.modifier'));
  }

  headers.push(
    isEventProps
      ? context.text.get('kind.event.singular')
      : context.text.get('kind.property.singular'),
  );

  headers.push(context.text.get('label.type'));

  if (hasComments) {
    headers.push(context.text.get('label.description'));
  }

  if (hasOverrides) {
    headers.push(context.text.get('label.overrides'));
  }

  if (hasInheritance) {
    headers.push(context.text.get('label.inheritedFrom'));
  }

  const rows: string[][] = [];

  const declarations = context.helpers.flattenDeclarations(props);

  declarations.forEach((property: DeclarationReflection, index: number) => {
    const propertyType = context.helpers.getDeclarationType(property);
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
      row.push(stripLineBreaks(context.partials.someType(propertyType), false));
    }

    if (hasComments) {
      const hasComment =
        property.comment?.blockTags?.length ||
        property?.comment?.summary?.length;
      const comments = property?.comment;
      if (hasComment && comments) {
        row.push(
          stripLineBreaks(
            formatTableDescriptionCol(context.partials.comment(comments)),
          ),
        );
      } else {
        row.push('-');
      }
    }

    if (hasOverrides) {
      row.push(context.partials.inheritance(property, -1) || '-');
    }

    if (hasInheritance) {
      row.push(context.partials.inheritance(property, -1) || '-');
    }

    rows.push(row);
  });

  return table(headers, rows);
}
