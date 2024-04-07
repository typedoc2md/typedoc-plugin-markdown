import { backTicks, strikeThrough, table } from '@plugin/libs/markdown';
import { removeLineBreaks } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection } from 'typedoc';

/**
 * Renders a collection of properties in a table.
 *
 * There is no association list partial for properties as these are handled as a standard list of members.
 *
 * @category Member Partials
 *
 */
export function declarationsTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options?: { isEventProps: boolean },
): string {
  const modifiers = model.map((param) =>
    this.helpers.getModifier(param)?.toString(),
  );
  const hasModifiers = modifiers.some((value) => Boolean(value));
  const flags = model.map((param) => this.partials.reflectionFlags(param));
  const hasFlags = flags.some((value) => Boolean(value));
  const hasOverrides = model.some((prop) => Boolean(prop.overwrites));
  const hasInheritance = model.some((prop) => Boolean(prop.inheritedFrom));
  const hasComments = model.some(
    (prop) => prop.comment?.blockTags?.length || prop?.comment?.summary?.length,
  );

  const headers: string[] = [];

  headers.push(
    options?.isEventProps
      ? this.getText('kind.event.singular')
      : this.getText('kind.property.singular'),
  );

  if (hasModifiers) {
    headers.push(this.getText('label.modifier'));
  }

  if (hasFlags) {
    headers.push(this.getText('label.flags'));
  }

  headers.push(this.getText('label.type'));

  if (hasComments) {
    headers.push(this.getText('label.description'));
  }

  if (hasOverrides) {
    headers.push(this.getText('label.overrides'));
  }

  if (hasInheritance) {
    headers.push(this.getText('label.inheritedFrom'));
  }

  const rows: string[][] = [];

  const declarations = this.helpers.getFlattenedDeclarations(model);

  declarations.forEach((property: DeclarationReflection, index: number) => {
    const propertyType = this.helpers.getDeclarationType(property);
    const row: string[] = [];

    const nameColumn: string[] = [];

    if (this.options.getValue('useHTMLAnchors') && property.anchor) {
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
        ? this.partials.functionType(
            (propertyType as any)?.declaration?.signatures,
            { forceParameterType: true },
          )
        : this.partials.someType(propertyType);
      row.push(removeLineBreaks(type));
    }

    if (hasComments) {
      const hasComment =
        property.comment?.blockTags?.length ||
        property?.comment?.summary?.length;
      const comments = property?.comment;
      if (hasComment && comments) {
        row.push(this.partials.comment(comments, { isTableColumn: true }));
      } else {
        row.push('-');
      }
    }

    if (hasOverrides) {
      row.push(
        this.partials.inheritance(property, { headingLevel: -1 }) || '-',
      );
    }

    if (hasInheritance) {
      row.push(
        this.partials.inheritance(property, { headingLevel: -1 }) || '-',
      );
    }

    rows.push(row);
  });

  return table(headers, rows);
}
