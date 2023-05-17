import { SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';

export function indexSignatureTitle(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
): string {
  const md = [''];
  const params = signature.parameters
    ? signature.parameters.map((parameter) => {
        return parameter.type
          ? `${backTicks(parameter.name)}: ${context.someType(parameter.type)}`
          : '';
      })
    : [];
  if (signature.type) {
    md.push(`\\[${params.join('')}\\]: ${context.someType(signature.type)}`);
  }
  return md.join(' ');
}
