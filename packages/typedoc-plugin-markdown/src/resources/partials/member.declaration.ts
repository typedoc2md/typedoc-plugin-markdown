import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { blockQuoteBlock, codeBlock, heading } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  if (context.getOption('indentifiersAsCodeBlocks')) {
    md.push(
      codeBlock(context.partials.declarationMemberIdentifier(declaration)),
    );
  } else {
    md.push(`> ${context.partials.declarationMemberIdentifier(declaration)}`);
  }

  if (declaration.comment) {
    md.push(context.partials.comment(declaration.comment, headingLevel));
  }

  if (declaration.sources) {
    md.push(context.partials.sources(declaration));
  }

  if (declaration.typeParameters) {
    md.push(heading(headingLevel, `Type parameters`));
    md.push(context.partials.typeParametersTable(declaration.typeParameters));
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(heading(headingLevel, `Index signature`));
      md.push(
        context.partials.indexSignatureTitle(typeDeclaration.indexSignature),
      );
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
                context.partials.signatureMember(signature, headingLevel + 1),
              ),
            );
          } else {
            md.push(
              context.partials.signatureMember(signature, headingLevel + 1),
            );
          }
        });
      }

      if (typeDeclaration?.children?.length) {
        md.push(
          context.partials.typeDeclarationMember(
            typeDeclaration,
            headingLevel + 1,
          ),
        );
      }
    }
  }

  md.push(context.partials.inheritance(declaration, headingLevel));

  return md.join('\n\n');
}
