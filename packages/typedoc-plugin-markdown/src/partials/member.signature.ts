import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  const headingLevel =
    parentHeadingLevel || getReflectionHeadingLevel(signature.parent) + 1;

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  md.push(context.partials.signatureTitle(signature));

  if (signature.comment) {
    md.push(context.partials.comment(signature.comment));
  }

  if (signature.typeParameters?.length) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParameters(signature.typeParameters));
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
  // if (!signature?.parent?.parent?.kindOf(ReflectionKind.Module)) {
  md.push(context.partials.sources(signature));
  // }

  return md.join('\n\n');
}
