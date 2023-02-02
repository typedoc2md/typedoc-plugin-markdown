import { SignatureReflection } from 'typedoc';
import { backTicks } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function indexSignatureTitle(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
) {
  const md = [''];
  const params = signature.parameters
    ? signature.parameters.map((parameter) => {
        return parameter.type
          ? `${backTicks(parameter.name)}: ${context.partials.someType(
              parameter.type,
            )}`
          : '';
      })
    : [];
  if (signature.type) {
    md.push(
      `\\[${params.join('')}\\]: ${context.partials.someType(signature.type)}`,
    );
  }
  return md.join(' ');
}
