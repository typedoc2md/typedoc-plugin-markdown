import { DeclarationReflection } from 'typedoc';
import { bold } from '../els';
import { getQuaternaryHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMember(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  const headingLevel = getQuaternaryHeadingLevel(reflection);

  md.push(context.partials.declarationMemberTitle(reflection));

  const typeDeclaration = (reflection.type as any)
    ?.declaration as DeclarationReflection;

  if (reflection.comment) {
    md.push(context.partials.comment(reflection.comment));
  }

  if (reflection.typeParameters) {
    md.push(bold('Type parameters'));
    md.push(context.partials.typeParameters(reflection.typeParameters));
  }

  if (typeDeclaration?.indexSignature) {
    md.push('context.indexSignaturePartial(typeDeclaration.indexSignature)');
  }

  if (typeDeclaration?.signatures) {
    md.push(
      bold(typeDeclaration.children ? 'Call signature' : 'Type declaration'),
    );
    typeDeclaration.signatures.forEach((signature) => {
      md.push(context.partials.signatureMember(signature));
    });
  }

  if (typeDeclaration?.children) {
    md.push(bold('Type declaration'));
    md.push(context.partials.propertiesTable(typeDeclaration.children));
  }

  md.push(context.partials.sources(reflection));

  return md.join('\n\n');
}
