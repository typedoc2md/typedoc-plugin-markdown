import {
  DeclarationReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { blockQuoteBlock, codeBlock, heading } from '../../../support/elements';

/**
 * @category Partials
 */
export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
  showSources = true,
): string {
  const md: string[] = [];

  if (showSources) {
    if (context.options.getValue('identifiersAsCodeBlocks')) {
      md.push(codeBlock(context.signatureMemberIdentifier(signature)));
    } else {
      md.push('> ' + context.signatureMemberIdentifier(signature));
    }
  }

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel, true, false));
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

    if (!typeDeclaration?.signatures && !typeDeclaration?.children) {
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
          false,
        ),
      );
    }
  }

  md.push(context.inheritance(signature, headingLevel));

  if (showSources && signature.sources) {
    md.push(context.sources(signature, headingLevel));
  }

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel, false, true));
  }

  return md.join('\n\n');
}
