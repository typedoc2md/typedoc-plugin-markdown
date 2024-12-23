import { backTicks, codeBlock } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { SignatureReflection } from 'typedoc';

export function indexSignature(
  this: MarkdownThemeContext,
  model: SignatureReflection,
): string {
  const useCodeBlocks = this.options.getValue('useCodeBlocks');

  const params = model.parameters
    ? model.parameters.map((parameter) => {
        return parameter.type
          ? `${useCodeBlocks ? parameter.name : backTicks(parameter.name)}: ${this.partials.someType(
              parameter.type,
            )}`
          : '';
      })
    : [];
  if (model.type) {
    if (this.options.getValue('useCodeBlocks')) {
      return codeBlock(
        `[${params.join('')}]: ${this.partials.someType(model.type)}`,
      );
    }
    return `\\[${params.join('')}\\]: ${this.partials.someType(model.type)}`;
  }
  return '';
}
