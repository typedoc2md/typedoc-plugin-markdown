import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { SignatureReflection } from 'typedoc';

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
