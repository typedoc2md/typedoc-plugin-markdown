import { SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function indexSignatureTitle(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
): string {
  const md = [''];
  const { backTicks } = context.markdown;
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
