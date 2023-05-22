import { SignatureReflection } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
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
