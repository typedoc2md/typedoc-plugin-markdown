import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { blockQuoteBlock, codeBlock, heading } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
) {
  const md: string[] = [];

  if (context.getOption('indentifiersAsCodeBlocks')) {
    md.push(codeBlock(context.partials.signatureMemberIdentifier(signature)));
  } else {
    md.push(`> ${context.partials.signatureMemberIdentifier(signature)}`);
  }

  if (signature.comment) {
    md.push(context.partials.comment(signature.comment, headingLevel));
  }

  if (signature.sources) {
    md.push(context.partials.sources(signature));
  }

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  if (signature.typeParameters?.length) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParametersTable(signature.typeParameters));
  }

  if (signature.parameters?.length) {
    md.push(heading(headingLevel, 'Parameters'));
    md.push(context.partials.parametersTable(signature.parameters));
  }

  if (signature.type) {
    md.push(heading(headingLevel, 'Returns'));
    md.push(context.partials.someType(signature.type, 'all'));

    if (signature.comment?.blockTags.length) {
      const tags = signature.comment.blockTags
        .filter((tag) => tag.tag === '@returns')
        .map((tag) => context.partials.commentParts(tag.content));
      md.push(tags.join('\n\n'));
    }

    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(
          blockQuoteBlock(
            context.partials.signatureMember(signature, headingLevel + 1),
          ),
        );
      });
    }

    if (typeDeclaration?.children) {
      if (context.getOption('propertiesFormat').toLowerCase() === 'table') {
        md.push(context.partials.propertiesTable(typeDeclaration.children));
      } else {
        typeDeclaration.children.forEach((declarationChild) => {
          md.push(context.partials.member(declarationChild, headingLevel + 1));
        });
      }
    }

    md.push(context.partials.inheritance(signature, headingLevel + 1));
  }

  return md.join('\n\n');
}
