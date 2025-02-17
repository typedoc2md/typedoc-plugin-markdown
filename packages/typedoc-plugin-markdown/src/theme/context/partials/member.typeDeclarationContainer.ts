import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, i18n, ReflectionKind } from 'typedoc';

export function typeDeclarationContainer(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  typeDeclaration: DeclarationReflection,
  opts: {
    headingLevel: number;
    nested?: boolean;
  },
): string {
  const md: string[] = [];

  if (typeDeclaration?.indexSignatures?.length) {
    md.push(heading(opts.headingLevel, i18n.kind_index_signature()));
    typeDeclaration?.indexSignatures?.forEach((indexSignature) => {
      md.push(this.partials.indexSignature(indexSignature));
    });
  }

  if (typeDeclaration?.signatures?.length) {
    typeDeclaration.signatures.forEach((signature) => {
      md.push(
        this.partials.signature(signature, {
          headingLevel: opts.headingLevel,
          nested: true,
        }),
      );
    });
  }

  if (typeDeclaration?.children?.length) {
    const useHeading =
      model.kind !== ReflectionKind.Property ||
      this.helpers.useTableFormat('properties');
    if (!opts.nested && typeDeclaration?.children?.length) {
      if (typeDeclaration.categories) {
        typeDeclaration.categories.forEach((category) => {
          md.push(heading(opts.headingLevel, category.title));
          md.push(
            this.partials.typeDeclaration(
              category as unknown as DeclarationReflection,
              {
                headingLevel: useHeading
                  ? opts.headingLevel + 1
                  : opts.headingLevel,
              },
            ),
          );
        });
      } else {
        md.push(
          this.partials.typeDeclaration(typeDeclaration, {
            headingLevel: useHeading
              ? opts.headingLevel
              : opts.headingLevel - 1,
          }),
        );
      }
    }
  }
  return md.join('\n\n');
}
