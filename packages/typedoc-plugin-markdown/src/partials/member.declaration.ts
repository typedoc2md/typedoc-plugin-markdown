import { DeclarationReflection } from 'typedoc';
import { codeBlock, heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
) {
  const md: string[] = [];

  md.push(codeBlock(context.partials.declarationMemberTitle(declaration)));

  if (declaration.comment) {
    md.push(context.partials.comment(declaration.comment));
  }

  md.push(declarationBody(context, declaration));

  md.push(context.partials.sources(declaration));

  return md.join('\n\n');
}

function declarationBody(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
) {
  const md: string[] = [];

  const headingLevel = getReflectionHeadingLevel(declaration) + 1;

  const typeDeclaration = (declaration.type as any)
    ?.declaration as DeclarationReflection;

  if (declaration.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParameters(declaration.typeParameters));
  }

  if (typeDeclaration?.indexSignature) {
    md.push(
      context.partials.indexSignatureTitle(typeDeclaration.indexSignature),
    );
  }

  if (typeDeclaration?.signatures) {
    md.push(
      heading(
        headingLevel,
        typeDeclaration.children ? 'Call signature' : 'Type declaration',
      ),
    );
    typeDeclaration.signatures.forEach((signature) => {
      md.push(context.partials.signatureMember(signature, headingLevel));
    });
  }

  if (typeDeclaration?.children) {
    md.push(heading(headingLevel, 'Type declaration'));
    if (context.getOption('typeDeclarationStyle') === 'table') {
      md.push(context.partials.typeDeclarationTable(typeDeclaration.children));
    } else {
      md.push(context.partials.typeDeclarationList(typeDeclaration.children));
    }
  }

  return md.join('\n\n');
}
