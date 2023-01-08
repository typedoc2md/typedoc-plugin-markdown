import { SignatureReflection } from 'typedoc';
import { heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function constructorMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
) {
  const md: string[] = [];

  const headingLevel = getReflectionHeadingLevel(signature);

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

  md.push(context.partials.sources(signature));

  return md.join('\n\n');
}
