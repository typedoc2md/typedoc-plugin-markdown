import {
  DeclarationReflection,
  ReferenceType,
  SignatureReflection,
  SomeType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import {
  backTicks,
  blockQuoteBlock,
  codeBlock,
  heading,
} from '../../../support/elements';

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

  return md.join('\n\n');
}

function getReturnType(
  context: MarkdownThemeRenderContext,
  typeDeclaration?: DeclarationReflection,
  type?: SomeType,
) {
  if (typeDeclaration?.children) {
    return backTicks('object');
  }
  if (typeDeclaration?.signatures) {
    return backTicks('function');
  }
  const shouldUseCodeBlocks =
    context.options.getValue('useCodeBlocks') &&
    type instanceof ReferenceType &&
    type.typeArguments?.length;
  return type
    ? shouldUseCodeBlocks
      ? codeBlock(context.someType(type))
      : context.someType(type).replace(/\n/g, ' ')
    : '';
}
