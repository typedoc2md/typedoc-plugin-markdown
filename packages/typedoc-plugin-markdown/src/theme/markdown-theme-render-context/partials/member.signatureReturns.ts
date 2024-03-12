import {
  backTicks,
  blockQuoteBlock,
  codeBlock,
  heading,
} from '@plugin/theme/lib/markdown';
import {
  DeclarationReflection,
  ReferenceType,
  ReflectionType,
  SignatureReflection,
  SomeType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders the return section of a signature.
 *
 * @category Member Partials
 */
export function signatureReturns(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  md.push(heading(headingLevel, context.helpers.getText('label.returns')));

  md.push(getReturnType(context, typeDeclaration, signature.type));

  if (signature.comment?.blockTags.length) {
    const tags = signature.comment.blockTags
      .filter((tag) => tag.tag === '@returns')
      .map((tag) => context.partials.commentParts(tag.content));
    md.push(tags.join('\n\n'));
  }

  if (
    signature.type instanceof ReferenceType &&
    signature.type.typeArguments?.length
  ) {
    if (
      signature.type.typeArguments[0] instanceof ReflectionType &&
      signature.type.typeArguments[0].declaration.children
    ) {
      md.push(
        blockQuoteBlock(
          context.partials.typeDeclaration(
            signature.type.typeArguments[0].declaration.children,
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
          context.partials.signature(signature, headingLevel + 1, true),
        ),
      );
    });
  }

  if (typeDeclaration?.children) {
    md.push(
      context.partials.typeDeclaration(typeDeclaration.children, headingLevel),
    );
  }

  return md.join('\n\n');
}

function getReturnType(
  context: MarkdownThemeRenderContext,
  typeDeclaration?: DeclarationReflection,
  type?: SomeType,
) {
  if (typeDeclaration?.signatures) {
    return backTicks('Function');
  }
  if (type) {
    const returnType = context.partials.someType(type);
    if (context.options.getValue('useCodeBlocks')) {
      if (
        type instanceof ReflectionType &&
        context.options.getValue('expandObjects')
      ) {
        return codeBlock(returnType);
      }
    }
    return returnType;
  }
  return '';
}
