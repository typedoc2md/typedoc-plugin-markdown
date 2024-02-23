import {
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../markdown';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  headingLevel: number,
  nested = false,
): string {
  const md: string[] = [];

  md.push(context.partials.reflectionFlags(declaration));

  md.push(context.partials.declarationMemberIdentifier(declaration));

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  if (
    !typeDeclaration?.signatures?.every((signature) =>
      Boolean(signature.comment),
    )
  ) {
    if (declaration.comment) {
      md.push(context.partials.comment(declaration.comment, headingLevel));
    }
  }

  if (declaration.type instanceof IntersectionType) {
    declaration.type?.types?.forEach((intersectionType) => {
      if (
        intersectionType instanceof ReflectionType &&
        !intersectionType.declaration.signatures
      ) {
        md.push(
          heading(headingLevel, context.text.getText('label.typeDeclaration')),
        );
        md.push(
          context.partials.typeDeclarationMember(
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
      md.push(
        heading(headingLevel, context.text.getText('label.typeDeclaration')),
      );
      md.push(
        context.partials.typeDeclarationMember(
          declaration.type.typeArguments[0].declaration,
          headingLevel,
        ),
      );
    }
  }

  if (declaration.typeParameters) {
    md.push(
      heading(headingLevel, context.text.getText('kind.typeParameter.plural')),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.partials.typeParametersTable(declaration.typeParameters));
    } else {
      md.push(context.partials.typeParametersList(declaration.typeParameters));
    }
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(
        heading(headingLevel, context.text.getText('label.indexSignature')),
      );
      md.push(
        context.partials.indexSignatureTitle(typeDeclaration.indexSignature),
      );
    }

    if (typeDeclaration?.signatures?.length) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(
          context.partials.signatureMember(signature, headingLevel, true),
        );
      });
    }

    if (typeDeclaration?.children?.length) {
      const useHeading =
        declaration.kind !== ReflectionKind.Property ||
        context.options.getValue('propertiesFormat') == 'table';
      if (!nested && typeDeclaration?.children?.length) {
        if (useHeading) {
          md.push(
            heading(
              headingLevel,
              context.text.getText('label.typeDeclaration'),
            ),
          );
        }
        md.push(
          context.partials.typeDeclarationMember(
            typeDeclaration,
            useHeading ? headingLevel : headingLevel - 1,
            declaration.kind === ReflectionKind.Property
              ? declaration
              : undefined,
          ),
        );
      }
    }
  }

  md.push(context.partials.inheritance(declaration, headingLevel));

  if (
    !nested &&
    declaration.sources &&
    !context.options.getValue('disableSources')
  ) {
    md.push(context.partials.sources(declaration, headingLevel));
  }

  return md.join('\n\n');
}
