import { heading, unorderedList } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
 *
 * @category Member Partials
 */
export function memberWithGroups(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.typeHierarchy?.next) {
    md.push(
      this.partials.hierarchy(model.typeHierarchy, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.typeParameters?.length) {
    md.push(
      heading(
        options.headingLevel,
        this.internationalization.kindPluralString(
          ReflectionKind.TypeParameter,
        ),
      ),
    );
    if (this.helpers.useTableFormat('parameters')) {
      md.push(this.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(this.partials.typeParametersList(model.typeParameters));
    }
  }

  if (model.implementedTypes?.length) {
    md.push(heading(options.headingLevel, this.i18n.theme_implements()));
    md.push(
      unorderedList(
        model.implementedTypes.map((implementedType) =>
          this.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in model && model.signatures?.length) {
    model.signatures.forEach((signature) => {
      md.push(
        this.partials.signature(signature, {
          headingLevel: options.headingLevel,
        }),
      );
    });
  }

  if (model.indexSignatures?.length) {
    md.push(heading(options.headingLevel, this.i18n.theme_indexable()));
    model.indexSignatures.forEach((indexSignature) => {
      md.push(this.partials.indexSignature(indexSignature));
    });
  }

  if (
    model.documents ||
    model?.groups?.some((group) => group.allChildrenHaveOwnDocument())
  ) {
    const isAbsoluteIndex = model?.groups?.every(
      (group) => group.owningReflection.kind !== ReflectionKind.Document,
    );
    if (isAbsoluteIndex) {
      md.push(heading(options.headingLevel, this.i18n.theme_index()));
    }

    if (model.documents) {
      md.push(
        this.partials.documents(model, {
          headingLevel: options.headingLevel,
        }),
      );
    }

    md.push(
      this.partials.reflectionIndex(model, {
        headingLevel: isAbsoluteIndex
          ? options.headingLevel + 1
          : options.headingLevel,
      }),
    );
  }

  md.push(this.partials.body(model, { headingLevel: options.headingLevel }));

  return md.join('\n\n');
}
