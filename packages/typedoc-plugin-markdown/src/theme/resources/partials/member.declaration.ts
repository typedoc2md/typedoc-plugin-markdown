import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import {
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';

/**
 * Renders a standard declaration member.
 *
 * @category Member Partials
 */
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

  md.push(this.partials.reflectionFlags(model));

  md.push(this.partials.declarationTitle(model));

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
            heading(opts.headingLevel, this.getText('label.typeDeclaration')),
          );

          md.push(
            this.partials.typeDeclaration(
              intersectionType.declaration.children,
              { headingLevel: opts.headingLevel },
            ),
          );
        }
      }
    });
  }

  if (model.type instanceof ReferenceType && model.type.typeArguments?.length) {
    if (model.type.typeArguments[0] instanceof ReflectionType) {
      if (model.type.typeArguments[0].declaration?.children) {
        md.push(
          heading(opts.headingLevel, this.getText('label.typeDeclaration')),
        );
        md.push(
          this.partials.typeDeclaration(
            model.type.typeArguments[0].declaration?.children,
            { headingLevel: opts.headingLevel },
          ),
        );
      }
    }
  }

  if (model.typeParameters) {
    md.push(
      heading(opts.headingLevel, this.getText('kind.typeParameter.plural')),
    );
    if (this.options.getValue('parametersFormat') === 'table') {
      md.push(this.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(this.partials.typeParametersList(model.typeParameters));
    }
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(heading(opts.headingLevel, this.getText('label.indexSignature')));
      md.push(this.partials.indexSignature(typeDeclaration.indexSignature));
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
        this.options.getValue('propertiesFormat') == 'table';
      if (!opts.nested && typeDeclaration?.children?.length) {
        if (useHeading) {
          md.push(
            heading(opts.headingLevel, this.getText('label.typeDeclaration')),
          );
        }

        if (typeDeclaration.categories) {
          typeDeclaration.categories.forEach((category) => {
            md.push(heading(opts.headingLevel, category.title));
            md.push(
              this.partials.typeDeclaration(category.children, {
                headingLevel: useHeading
                  ? opts.headingLevel + 1
                  : opts.headingLevel,
              }),
            );
          });
        } else {
          md.push(
            this.partials.typeDeclaration(typeDeclaration.children, {
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
