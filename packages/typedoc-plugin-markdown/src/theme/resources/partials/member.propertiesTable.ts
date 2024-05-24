import {
  backTicks,
  htmlTable,
  strikeThrough,
  table,
} from '@plugin/libs/markdown';
import { removeLineBreaks } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { getPropertyDefaultValue } from '../helpers/get-property-default-value';

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
  const tableColumnsOptions = this.options.getValue('tableColumnVisibility');
  const leftAlignHeadings = this.options.getValue('leftAlignTableHeaders');
  const modifiers = model.map((param) =>
    this.helpers.getModifier(param)?.toString(),
  );

  const hasModifiers =
    !tableColumnsOptions.hideModifiers &&
    modifiers.some((value) => Boolean(value));

  const flags = model.map((param) => this.partials.reflectionFlags(param));
  const hasFlags = flags.some((value) => Boolean(value));

  const hasOverrides =
    !tableColumnsOptions.hideOverrides &&
    model.some((prop) => Boolean(prop.overwrites));

  const hasInheritance =
    !tableColumnsOptions.hideInherited &&
    model.some((prop) => Boolean(prop.inheritedFrom));

  const hasDefaults = model.some((prop) =>
    Boolean(getPropertyDefaultValue(prop)),
  );
  const hasComments = model.some(
    (prop) => prop.comment?.blockTags?.length || prop?.comment?.summary?.length,
  );

  const hasSources =
    !tableColumnsOptions.hideSources &&
    !this.options.getValue('disableSources');

  const headers: string[] = [];

  headers.push(
    options?.isEventProps
      ? this.i18n.theme_event()
      : this.internationalization.kindSingularString(ReflectionKind.Property),
  );

  if (hasModifiers) {
    headers.push(this.i18n.theme_modifier());
  }

  if (hasFlags) {
    headers.push(this.i18n.theme_flags());
  }

  headers.push(this.i18n.theme_type());

  if (hasDefaults) {
    headers.push(this.i18n.theme_default_value());
  }

  if (hasComments) {
    headers.push(this.i18n.theme_description());
  }

  if (hasOverrides) {
    headers.push(this.i18n.theme_overrides());
  }

  if (hasInheritance) {
    headers.push(this.i18n.theme_inherited_from());
  }

  if (hasSources) {
    headers.push(this.i18n.theme_defined_in());
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

    if (hasDefaults) {
      row.push(getPropertyDefaultValue(property) || backTicks('undefined'));
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
        property.overwrites
          ? this.partials.inheritance(property, { headingLevel: -1 })
          : '-',
      );
    }

    if (hasInheritance) {
      row.push(
        property.inheritedFrom
          ? this.partials.inheritance(property, { headingLevel: -1 })
          : '-',
      );
    }

    if (hasSources) {
      row.push(this.partials.sources(property, { headingLevel: -1 }));
    }

    rows.push(row);
  });

  return this.options.getValue('propertiesFormat') == 'table'
    ? table(headers, rows, leftAlignHeadings)
    : htmlTable(headers, rows, leftAlignHeadings);
}
