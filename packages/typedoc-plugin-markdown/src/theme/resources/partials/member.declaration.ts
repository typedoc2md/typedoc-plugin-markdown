import {
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Partials
 */
export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  headingLevel: number,
  nested = false,
) {
  const md: string[] = [];

  md.push(context.declarationMemberIdentifier(declaration));

  if (declaration.comment) {
    md.push(context.comment(declaration.comment, headingLevel));
  }

  if (declaration.type instanceof IntersectionType) {
    declaration.type?.types?.forEach((intersectionType) => {
      if (intersectionType instanceof ReflectionType) {
        md.push(heading(headingLevel, 'Type declaration'));
        md.push(
          context.typeDeclarationMember(
            intersectionType.declaration,
            headingLevel,
          ),
        );
      }
    });
  }

  if (
    declaration.type instanceof ReferenceType &&
    declaration.type.typeArguments?.length
  ) {
    if (declaration.type.typeArguments[0] instanceof ReflectionType) {
      md.push(heading(headingLevel, 'Type declaration'));
      md.push(
        context.typeDeclarationMember(
          declaration.type.typeArguments[0].declaration,
          headingLevel,
        ),
      );
    }
  }

  if (declaration.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.typeParametersTable(declaration.typeParameters));
    } else {
      md.push(
        context.typeParametersList(
          declaration.typeParameters,
          headingLevel + 1,
        ),
      );
    }
  }

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(heading(headingLevel, `Index signature`));
      md.push(context.indexSignatureTitle(typeDeclaration.indexSignature));
    }

    if (
      typeDeclaration?.signatures?.length ||
      typeDeclaration?.children?.length
    ) {
      if (typeDeclaration?.signatures?.length) {
        typeDeclaration.signatures.forEach((signature) => {
          md.push(context.signatureMember(signature, headingLevel, true));
        });
      }
      if (!nested && typeDeclaration?.children?.length) {
        md.push(heading(headingLevel, 'Type declaration'));
        md.push(context.typeDeclarationMember(typeDeclaration, headingLevel));
      }
    }
  }

  md.push(context.inheritance(declaration, headingLevel));

  if (
    !nested &&
    declaration.sources &&
    !context.options.getValue('disableSources')
  ) {
    md.push(context.sources(declaration, headingLevel));
  }

  return md.join('\n\n');
}
