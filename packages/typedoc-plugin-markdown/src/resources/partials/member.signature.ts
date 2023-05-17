import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { blockQuoteBlock, codeBlock, heading } from '../../support/els';

export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (context.options.getValue('identifiersAsCodeBlocks')) {
    md.push(codeBlock(context.signatureMemberIdentifier(signature)));
  } else {
    md.push(`> ${context.signatureMemberIdentifier(signature)}`);
  }

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel));
  }

  if (signature.sources) {
    md.push(context.sources(signature));
  }

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  if (signature.typeParameters?.length) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.typeParametersTable(signature.typeParameters));
  }

  if (signature.parameters?.length) {
    md.push(heading(headingLevel, 'Parameters'));
    md.push(context.parametersTable(signature.parameters));
  }

  if (signature.type) {
    md.push(heading(headingLevel, 'Returns'));
    md.push(context.someType(signature.type, 'all'));

    if (signature.comment?.blockTags.length) {
      const tags = signature.comment.blockTags
        .filter((tag) => tag.tag === '@returns')
        .map((tag) => context.commentParts(tag.content));
      md.push(tags.join('\n\n'));
    }

    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(
          blockQuoteBlock(context.signatureMember(signature, headingLevel + 1)),
        );
      });
    }

    if (typeDeclaration?.children) {
      md.push(context.typeDeclarationMember(typeDeclaration, headingLevel + 1));
    }

    md.push(context.inheritance(signature, headingLevel));
  }

  return md.join('\n\n');
}
