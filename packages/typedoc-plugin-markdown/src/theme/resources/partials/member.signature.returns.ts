import {
  DeclarationReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';
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

  md.push(heading(headingLevel, 'Returns'));

  if (
    signature.type &&
    !typeDeclaration?.signatures &&
    !typeDeclaration?.children
  ) {
    md.push(context.someType(signature.type, true));
  }

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

  const hasParent = typeDeclaration?.parent?.kindOf(ReflectionKind.Property);

  if (typeDeclaration?.children) {
    md.push(
      context.typeDeclarationMember(
        typeDeclaration,
        headingLevel + 1,
        hasParent ? signature.name : undefined,
      ),
    );
  }

  return md.join('\n\n');
}
