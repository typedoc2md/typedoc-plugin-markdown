import { backTicks } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { SignatureReflection } from 'typedoc';

/**
 * Renders an index signature block
 *
 * @category Member Partials
 */
export function indexSignature(
  this: MarkdownThemeContext,
  model: SignatureReflection,
): string {
  const md = [''];

  const params = model.parameters
    ? model.parameters.map((parameter) => {
        return parameter.type
          ? `${backTicks(parameter.name)}: ${this.partials.someType(
              parameter.type,
            )}`
          : '';
      })
    : [];
  if (model.type) {
    md.push(`\\[${params.join('')}\\]: ${this.partials.someType(model.type)}`);
  }
  return md.join(' ');
}
