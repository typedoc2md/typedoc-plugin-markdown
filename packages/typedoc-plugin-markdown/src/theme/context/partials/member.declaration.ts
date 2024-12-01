import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  ArrayType,
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionKind,
  ReflectionType,
  UnionType,
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

  md.push(this.partials.declarationTitle(model));

  if (model?.documents) {
    md.push(
      this.partials.documents(model, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  let typeDeclaration = (model.type as any)
    ?.declaration as DeclarationReflection;

  if (
    model.type instanceof ArrayType &&
    model.type?.elementType instanceof ReflectionType
  ) {
    typeDeclaration = model.type?.elementType?.declaration;
  }

  const hasTypeDeclaration =
    Boolean(typeDeclaration) ||
    (model.type instanceof UnionType &&
      model.type?.types.some((type) => type instanceof ReflectionType));

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: opts.headingLevel,
        showSummary: true,
        showTags: false,
      }),
    );
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

  if (hasTypeDeclaration) {
    if (model.type instanceof UnionType) {
      if (this.helpers.hasUsefulTypeDetails(model.type)) {
        md.push(heading(opts.headingLevel, this.i18n.theme_type_declaration()));

        model.type.types.forEach((type) => {
          if (type instanceof ReflectionType) {
            md.push(this.partials.someType(type, { forceCollapse: true }));
            md.push(
              this.partials.typeDeclarationContainer(
                model,
                type.declaration,
                options,
              ),
            );
          } else {
            md.push(`${this.partials.someType(type)}`);
          }
        });
      }
    } else {
      const useHeading =
        typeDeclaration?.children?.length &&
        (model.kind !== ReflectionKind.Property ||
          this.helpers.useTableFormat('properties'));
      if (useHeading) {
        md.push(heading(opts.headingLevel, this.i18n.theme_type_declaration()));
      }
      md.push(
        this.partials.typeDeclarationContainer(model, typeDeclaration, options),
      );
    }
  }
  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: opts.headingLevel,
        showSummary: false,
        showTags: true,
        showReturns: true,
      }),
    );
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
