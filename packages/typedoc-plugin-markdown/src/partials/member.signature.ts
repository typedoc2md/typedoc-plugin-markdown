import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { bold } from '../els';
import { getQuaternaryHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
) {
  const md: string[] = [];

  const headingLevel = getQuaternaryHeadingLevel(signature);

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  md.push(context.partials.signatureTitle(signature));

  if (signature.comment) {
    md.push(context.partials.comment(signature.comment));
  }

  if (signature.typeParameters?.length) {
    md.push(bold('Type parameters'));
    md.push(context.partials.typeParameters(signature.typeParameters));
  }

  if (signature.parameters?.length) {
    md.push(bold('Parameters'));
    md.push(context.partials.parametersTable(signature.parameters));
  }

  if (signature.type) {
    md.push(bold('Returns'));
    md.push(context.partials.someType(signature.type, 'all'));

    if (signature.comment?.blockTags.length) {
      const tags = signature.comment.blockTags
        .filter((tag) => tag.tag === '@returns')
        .map((tag) => context.partials.commentParts(tag.content));
      md.push(tags.join('\n\n'));
    }

    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature));
      });
    }

    if (typeDeclaration?.children) {
      md.push(context.partials.propertiesTable(typeDeclaration.children));
    }
  }

  return md.join('\n\n');
}
