import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { blockQuoteBlock, codeBlock, heading } from '../../support/els';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  if (context.options.getValue('identifiersAsCodeBlocks')) {
    md.push(codeBlock(context.declarationMemberIdentifier(declaration)));
  } else {
    md.push(`> ${context.declarationMemberIdentifier(declaration)}`);
  }

  if (declaration.comment) {
    md.push(context.comment(declaration.comment, headingLevel));
  }

  if (declaration.sources) {
    md.push(context.sources(declaration));
  }

  if (declaration.typeParameters) {
    md.push(heading(headingLevel, `Type parameters`));
    md.push(context.typeParametersTable(declaration.typeParameters));
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(heading(headingLevel, `Index signature`));
      md.push(context.indexSignatureTitle(typeDeclaration.indexSignature));
    }

    if (
      typeDeclaration?.signatures?.length ||
      typeDeclaration?.children?.length
    ) {
      if (typeDeclaration?.parent?.kindOf(ReflectionKind.Property)) {
        md.push(
          heading(
            headingLevel,
            `Type declaration (${typeDeclaration.parent?.name})`,
          ),
        );
      } else {
        md.push(heading(headingLevel, `Type declaration`));
      }

      if (typeDeclaration?.signatures?.length) {
        typeDeclaration.signatures.forEach((signature) => {
          if (typeDeclaration?.parent?.kindOf(ReflectionKind.Property)) {
            md.push(
              blockQuoteBlock(
                context.signatureMember(signature, headingLevel + 1),
              ),
            );
          } else {
            md.push(context.signatureMember(signature, headingLevel + 1));
          }
        });
      }

      if (typeDeclaration?.children?.length) {
        md.push(
          context.typeDeclarationMember(typeDeclaration, headingLevel + 1),
        );
      }
    }
  }

  md.push(context.inheritance(declaration, headingLevel));

  return md.join('\n\n');
}
