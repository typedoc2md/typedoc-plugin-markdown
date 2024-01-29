import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, strikeThrough, table } from '../markdown';
import { formatTableDescriptionCol, stripLineBreaks } from '../utils';

export function propertiesTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
  isEventProps = false,
): string {
  const modifiers = props.map((param) => context.helpers.getModifier(param));
  const hasModifiers = modifiers.some((value) => Boolean(value));
  const flags = props.map((param) => context.partials.reflectionFlags(param));
  const hasFlags = flags.some((value) => Boolean(value));
  const hasOverrides = props.some((prop) => Boolean(prop.overwrites));
  const hasInheritance = props.some((prop) => Boolean(prop.inheritedFrom));
  const hasComments = props.some(
    (prop) => prop.comment?.blockTags?.length || prop?.comment?.summary?.length,
  );

  const headers: string[] = [];

  headers.push(
    isEventProps
      ? context.getText('kind.event.singular')
      : context.getText('kind.property.singular'),
  );

  if (hasModifiers) {
    headers.push(context.getText('label.modifier'));
  }

  if (hasFlags) {
    headers.push(context.getText('label.flags'));
  }

  headers.push(context.getText('label.type'));

  if (hasComments) {
    headers.push(context.getText('label.description'));
  }

  if (hasOverrides) {
    headers.push(context.getText('label.overrides'));
  }

  if (hasInheritance) {
    headers.push(context.getText('label.inheritedFrom'));
  }

  const rows: string[][] = [];

  const declarations = context.helpers.flattenDeclarations(props);

  declarations.forEach((property: DeclarationReflection, index: number) => {
    const propertyType = context.helpers.getDeclarationType(property);
    const row: string[] = [];

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

    if (hasModifiers) {
      row.push(backTicks(modifiers[index] || 'public'));
    }

    if (hasFlags) {
      row.push(flags[index]);
    }

    if (propertyType) {
      const type = (propertyType as any).declaration?.signatures?.length
        ? context.partials.functionType(
            (propertyType as any)?.declaration?.signatures,
            true,
          )
        : context.partials.someType(propertyType);
      row.push(stripLineBreaks(type, false));
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
