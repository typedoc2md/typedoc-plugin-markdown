import { SignatureReflection } from 'typedoc';
import { bold } from '../support/els';
import { getTeritiaryHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function constructorMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
) {
  const md: string[] = [];

  const headingLevel = getTeritiaryHeadingLevel(signature);

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

  md.push(context.partials.sources(signature));

  return md.join('\n\n');
}
