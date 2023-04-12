import { DeclarationReflection } from 'typedoc';
import { codeBlock, heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
) {
  const md: string[] = [];

  const headingLevel =
    getReflectionHeadingLevel(
      declaration,
      context.getOption('groupBySymbols'),
    ) + 1;

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  if (declaration.type) {
    md.push(`> ${context.partials.declarationMemberDef(declaration)}`);

    if (typeDeclaration?.children) {
      md.push(codeBlock(context.partials.someType(declaration.type)));
    }
  }

  if (declaration.comment) {
    md.push(context.partials.comment(declaration.comment, headingLevel));
  }

  if (declaration.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParameters(declaration.typeParameters));
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignature) {
      md.push(heading(headingLevel, 'Index signature'));
      md.push(
        context.partials.indexSignatureTitle(typeDeclaration.indexSignature),
      );
    }

    md.push(heading(headingLevel, 'Type declaration'));
    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature, headingLevel));
      });
    }

    if (typeDeclaration?.children) {
      if (context.getOption('typeDeclarationStyle') === 'table') {
        md.push(
          context.partials.typeDeclarationTable(typeDeclaration.children),
        );
      } else {
        md.push(context.partials.typeDeclarationList(typeDeclaration.children));
      }
    }
  }

  md.push(context.partials.sources(declaration, headingLevel));

  return md.join('\n\n');
}
