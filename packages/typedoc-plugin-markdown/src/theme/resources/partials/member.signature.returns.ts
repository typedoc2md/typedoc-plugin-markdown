import {
  DeclarationReflection,
  ReferenceType,
  ReflectionType,
  SignatureReflection,
  SomeType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, blockQuoteBlock, heading } from '../../../support/elements';

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

  md.push(getReturnType(context, typeDeclaration, signature.type));

  if (signature.comment?.blockTags.length) {
    const tags = signature.comment.blockTags
      .filter((tag) => tag.tag === '@returns')
      .map((tag) => context.commentParts(tag.content));
    md.push(tags.join('\n\n'));
  }

  if (
    signature.type instanceof ReferenceType &&
    signature.type.typeArguments?.length
  ) {
    if (signature.type.typeArguments[0] instanceof ReflectionType) {
      md.push(
        blockQuoteBlock(
          context.typeDeclarationMember(
            signature.type.typeArguments[0].declaration,
            headingLevel,
          ),
        ),
      );
    }
  }

  if (typeDeclaration?.signatures) {
    typeDeclaration.signatures.forEach((signature) => {
      md.push(
        blockQuoteBlock(
          context.signatureMember(signature, headingLevel + 1, true),
        ),
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

  return md.join('\n\n');
}

function getReturnType(
  context: MarkdownThemeRenderContext,
  typeDeclaration?: DeclarationReflection,
  type?: SomeType,
) {
  if (typeDeclaration?.children) {
    return backTicks('Object');
  }
  if (typeDeclaration?.signatures) {
    return backTicks('Function');
  }
  return type ? context.someType(type, true).replace(/\n/g, ' ') : '';
}
