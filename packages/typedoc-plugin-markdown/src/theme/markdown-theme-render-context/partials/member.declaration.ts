import { heading } from '@plugin/theme/lib/markdown';
import {
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders a standard declaration member.
 *
 * @category Member Partials
 */
export function declaration(
  context: MarkdownThemeRenderContext,
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

  md.push(context.partials.reflectionFlags(model));

  md.push(context.partials.declarationTitle(model));

  const typeDeclaration = (model.type as any)
    ?.declaration as DeclarationReflection;

  if (
    !typeDeclaration?.signatures?.every((signature) =>
      Boolean(signature.comment),
    )
  ) {
    if (model.comment) {
      md.push(
        context.partials.comment(model.comment, {
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
            heading(
              opts.headingLevel,
              context.helpers.getText('label.typeDeclaration'),
            ),
          );

          md.push(
            context.partials.typeDeclaration(
              intersectionType.declaration.children,
              opts.headingLevel,
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
          heading(
            opts.headingLevel,
            context.helpers.getText('label.typeDeclaration'),
          ),
        );
        md.push(
          context.partials.typeDeclaration(
            model.type.typeArguments[0].declaration?.children,
            opts.headingLevel,
          ),
        );
      }
    }
  }

  if (model.typeParameters) {
    md.push(
      heading(
        opts.headingLevel,
        context.helpers.getText('kind.typeParameter.plural'),
      ),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(context.partials.typeParametersList(model.typeParameters));
    }
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(
        heading(
          opts.headingLevel,
          context.helpers.getText('label.indexSignature'),
        ),
      );
      md.push(context.partials.indexSignature(typeDeclaration.indexSignature));
    }

    if (typeDeclaration?.signatures?.length) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(context.partials.signature(signature, opts.headingLevel, true));
      });
    }

    if (typeDeclaration?.children?.length) {
      const useHeading =
        model.kind !== ReflectionKind.Property ||
        context.options.getValue('propertiesFormat') == 'table';
      if (!opts.nested && typeDeclaration?.children?.length) {
        if (useHeading) {
          md.push(
            heading(
              opts.headingLevel,
              context.helpers.getText('label.typeDeclaration'),
            ),
          );
        }

        if (typeDeclaration.categories) {
          typeDeclaration.categories.forEach((category) => {
            md.push(heading(opts.headingLevel, category.title));
            md.push(
              context.partials.typeDeclaration(
                category.children,
                useHeading ? opts.headingLevel + 1 : opts.headingLevel,
              ),
            );
          });
        } else {
          md.push(
            context.partials.typeDeclaration(
              typeDeclaration.children,
              useHeading ? opts.headingLevel : opts.headingLevel - 1,
            ),
          );
        }
      }
    }
  }

  md.push(context.partials.inheritance(model, opts.headingLevel));

  if (
    !opts.nested &&
    model.sources &&
    !context.options.getValue('disableSources')
  ) {
    md.push(context.partials.sources(model, opts.headingLevel));
  }

  return md.join('\n\n');
}
