import { heading, link, unorderedList } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, i18n, ReflectionKind } from 'typedoc';

/**
 * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
 */
export function memberWithGroups(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.kind === ReflectionKind.TypeAlias) {
    md.push(this.partials.declarationTitle(model));
  }

  if (
    ![ReflectionKind.Module, ReflectionKind.Namespace].includes(model.kind) &&
    model.sources &&
    !this.options.getValue('disableSources')
  ) {
    md.push(this.partials.sources(model));
  }

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.typeHierarchy?.next) {
    const includeHierarchySummary =
      this.options.isSet('includeHierarchySummary') &&
      this.options.getValue('includeHierarchySummary');
    if (includeHierarchySummary) {
      md.push(heading(options.headingLevel, i18n.theme_hierarchy()));
      md.push(
        link(
          i18n.theme_hierarchy_view_summary(),
          `${this.relativeURL('hierarchy')}${this.options.getValue('fileExtension')}`,
        ),
      );
    }
    md.push(
      this.partials.hierarchy(model.typeHierarchy, {
        headingLevel: includeHierarchySummary
          ? options.headingLevel + 1
          : options.headingLevel,
      }),
    );
  }

  if (model.typeParameters?.length) {
    md.push(
      heading(
        options.headingLevel,
        ReflectionKind.pluralString(ReflectionKind.TypeParameter),
      ),
    );
    if (this.helpers.useTableFormat('parameters')) {
      md.push(this.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(
        this.partials.typeParametersList(model.typeParameters, {
          headingLevel: options.headingLevel,
        }),
      );
    }
  }

  if (model.implementedTypes?.length) {
    md.push(heading(options.headingLevel, i18n.theme_implements()));
    md.push(
      unorderedList(
        model.implementedTypes.map((implementedType) =>
          this.partials.someType(implementedType),
        ),
      ),
    );
  }

  if (model.kind === ReflectionKind.Class && model.categories?.length) {
    model.groups
      ?.filter((group) => group.title === i18n.kind_plural_constructor())
      .forEach((group) => {
        md.push(heading(options.headingLevel, i18n.kind_plural_constructor()));
        group.children.forEach((child) => {
          md.push(
            this.partials.constructor(child as DeclarationReflection, {
              headingLevel: options.headingLevel + 1,
            }),
          );
        });
      });
  }

  if ('signatures' in model && model.signatures?.length) {
    const multipleSignatures = model.signatures?.length > 1;
    model.signatures.forEach((signature) => {
      if (multipleSignatures) {
        md.push(heading(options.headingLevel, i18n.kind_call_signature()));
      }
      md.push(
        this.partials.signature(signature, {
          headingLevel: multipleSignatures
            ? options.headingLevel + 1
            : options.headingLevel,
        }),
      );
    });
  }

  if (model.indexSignatures?.length) {
    md.push(heading(options.headingLevel, i18n.theme_indexable()));
    model.indexSignatures.forEach((indexSignature) => {
      md.push(
        this.partials.indexSignature(indexSignature, {
          headingLevel: options.headingLevel + 1,
        }),
      );
    });
  }

  md.push(this.partials.body(model, { headingLevel: options.headingLevel }));

  return md.join('\n\n');
}
