import { backTicks } from '@plugin/theme/lib/markdown';
import { SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders an index signature block
 *
 * @category Member Partials
 */
export function indexSignature(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
): string {
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
