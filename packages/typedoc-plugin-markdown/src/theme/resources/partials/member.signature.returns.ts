import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { blockQuoteBlock, heading } from '../../../support/elements';

/**
 * @category Partials
 */
export function signatureMemberReturns(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  const showReturns =
    signature.comment?.blockTags.length ||
    typeDeclaration?.signatures ||
    typeDeclaration?.children;

  if (showReturns) {
    md.push(heading(headingLevel, 'Returns'));

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
      md.push(
        blockQuoteBlock(
          context.typeDeclarationMember(typeDeclaration, headingLevel),
        ),
      );
    }
  }

  return md.join('\n\n');
}
