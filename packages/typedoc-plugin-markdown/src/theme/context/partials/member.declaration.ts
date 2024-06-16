import { backTicks, heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import {
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';

export function declaration(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: {
    headingLevel: number;
    nested?: boolean;
  } = {
    headingLevel: 2,
    nested: false,
  },
): string {
  const md: string[] = [];

  const opts = {
    nested: false,
    ...options,
  };

  md.push(
    this.helpers
      .getCommentFlags(model)
      .map((item) => backTicks(item))
      .join(' '),
  );

  md.push(this.partials.declarationTitle(model));

  if (model?.documents) {
    md.push(
      this.partials.documents(model, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  const typeDeclaration = (model.type as any)
    ?.declaration as DeclarationReflection;

  if (
    !typeDeclaration?.signatures?.every((signature) =>
      Boolean(signature.comment),
    )
  ) {
    if (model.comment) {
      md.push(
        this.partials.comment(model.comment, {
          headingLevel: opts.headingLevel,
          showTags: true,
        }),
      );
    }
  }

  if (model.type instanceof IntersectionType) {
    model.type?.types?.forEach((intersectionType) => {
      if (
        intersectionType instanceof ReflectionType &&
        !intersectionType.declaration.signatures
      ) {
        if (intersectionType.declaration.children) {
          md.push(
            heading(opts.headingLevel, this.i18n.theme_type_declaration()),
          );

          md.push(
            this.partials.typeDeclaration(intersectionType.declaration, {
              headingLevel: opts.headingLevel,
            }),
          );
        }
      }
    });
  }

  if (model.type instanceof ReferenceType && model.type.typeArguments?.length) {
    if (model.type.typeArguments[0] instanceof ReflectionType) {
      if (model.type.typeArguments[0].declaration?.children) {
        md.push(heading(opts.headingLevel, this.i18n.theme_type_declaration()));
        md.push(
          this.partials.typeDeclaration(
            model.type.typeArguments[0].declaration,
            { headingLevel: opts.headingLevel },
          ),
        );
      }
    }
  }

  if (model.typeParameters) {
    md.push(
      heading(
        opts.headingLevel,
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

  if (Boolean(typeDeclaration)) {
    if (typeDeclaration?.indexSignatures?.length) {
      md.push(heading(opts.headingLevel, this.i18n.kind_index_signature()));
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
        if (useHeading) {
          md.push(
            heading(opts.headingLevel, this.i18n.theme_type_declaration()),
          );
        }

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
  }

  md.push(
    this.partials.inheritance(model, { headingLevel: opts.headingLevel }),
  );

  if (
    !opts.nested &&
    model.sources &&
    !this.options.getValue('disableSources')
  ) {
    md.push(this.partials.sources(model, { headingLevel: opts.headingLevel }));
  }

  return md.join('\n\n');
}
