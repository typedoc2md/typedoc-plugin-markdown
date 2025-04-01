import {
  backTicks,
  htmlTable,
  strikeThrough,
  table,
} from '@plugin/libs/markdown/index.js';
import { removeLineBreaks } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, i18n, ReflectionKind } from 'typedoc';

/**
 * Renders a collection of properties in a table.
 *
 * There is no association list partial for properties as these are handled as a standard list of members.
 */
export function propertiesTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options?: { isEventProps: boolean; kind: ReflectionKind },
): string {
  const tableColumnsOptions = this.options.getValue('tableColumnSettings');
  const leftAlignHeadings = tableColumnsOptions.leftAlignHeaders;
  const declarations = this.helpers.getFlattenedDeclarations(model);

  const modifiers = declarations.map((prop) =>
    this.helpers.getModifier(prop)?.toString(),
  );

  const comments = declarations.map((prop) =>
    prop.comment
      ? this.partials.comment(prop.comment, { isTableColumn: true })
      : '',
  );

  const hasModifiers =
    !tableColumnsOptions.hideModifiers &&
    modifiers.some((value) => Boolean(value));

  const hasOverrides =
    !tableColumnsOptions.hideOverrides &&
    model.some((prop) => Boolean(prop.overwrites));

  const hasInheritance =
    !tableColumnsOptions.hideInherited &&
    model.some((prop) => Boolean(prop.inheritedFrom));

  const hasDefaults =
    !tableColumnsOptions.hideDefaults &&
    model.some((prop) => Boolean(this.helpers.getPropertyDefaultValue(prop)));

  const hasComments = comments.some((value) => Boolean(value.trim()));

  const hasSources =
    !tableColumnsOptions.hideSources &&
    !this.options.getValue('disableSources');

  const headers: string[] = [];

  headers.push(
    options?.isEventProps
      ? i18n.theme_event()
      : ReflectionKind.singularString(ReflectionKind.Property),
  );

  if (hasModifiers) {
    headers.push(i18n.theme_modifier());
  }

  headers.push(i18n.theme_type());

  if (hasDefaults) {
    headers.push(i18n.theme_default_value());
  }

  if (hasComments) {
    headers.push(i18n.theme_description());
  }

  if (hasOverrides) {
    headers.push(i18n.theme_overrides());
  }

  if (hasInheritance) {
    headers.push(i18n.theme_inherited_from());
  }

  if (hasSources) {
    headers.push(i18n.theme_defined_in());
  }

  const rows: string[][] = [];

  declarations.forEach((property: DeclarationReflection, index: number) => {
    const propertyType = this.helpers.getDeclarationType(property);
    const row: string[] = [];

    const nameColumn: string[] = [];

    if (this.router.hasUrl(property) && this.router.getAnchor(property)) {
      nameColumn.push(`<a id="${this.router.getAnchor(property)}"></a>`);
    }

    const propertyName = backTicks(
      `${property.name}${property.flags.isOptional ? '?' : ''}`,
    );

    if (property.isDeprecated && property.isDeprecated()) {
      nameColumn.push(strikeThrough(propertyName));
    } else {
      nameColumn.push(propertyName);
    }

    row.push(nameColumn.join(' '));

    if (hasModifiers) {
      row.push(backTicks(modifiers[index] || 'public'));
    }

    if (propertyType) {
      const type = this.partials.someType(propertyType);
      row.push(removeLineBreaks(type));
    }

    if (hasDefaults) {
      row.push(
        this.helpers.getPropertyDefaultValue(property) ||
          backTicks('undefined'),
      );
    }

    if (hasComments) {
      const commentText = comments[index];
      if (commentText?.trim()?.length) {
        row.push(commentText);
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
      row.push(this.partials.sources(property, { hideLabel: true }));
    }

    rows.push(row);
  });

  const displayHtmlTable = shouldDisplayHTMLTable(this, options?.kind);

  return displayHtmlTable
    ? htmlTable(headers, rows, leftAlignHeadings)
    : table(headers, rows, leftAlignHeadings);
}

function shouldDisplayHTMLTable(
  context: MarkdownThemeContext,
  kind?: ReflectionKind,
) {
  if (context.options.getValue('propertiesFormat') === 'htmlTable') {
    return true;
  }
  if (
    kind === ReflectionKind.Interface &&
    context.options.getValue('interfacePropertiesFormat') === 'htmlTable'
  ) {
    return true;
  }
  if (
    kind === ReflectionKind.Class &&
    context.options.getValue('classPropertiesFormat') === 'htmlTable'
  ) {
    return true;
  }
  if (
    kind === ReflectionKind.TypeAlias &&
    context.options.getValue('typeAliasPropertiesFormat') === 'htmlTable'
  ) {
    return true;
  }
  return false;
}
