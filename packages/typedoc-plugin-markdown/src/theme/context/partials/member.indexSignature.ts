import { backTicks, codeBlock } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { SignatureReflection } from 'typedoc';

export function indexSignature(
  this: MarkdownThemeContext,
  model: SignatureReflection,
  options?: { headingLevel: number },
): string {
  const useCodeBlocks = this.options.getValue('useCodeBlocks');
  const md: string[] = [];
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
      md.push(
        codeBlock(
          `[${params.join('')}]: ${this.partials.someType(model.type)}`,
        ),
      );
    } else {
      md.push(
        `\\[${params.join('')}\\]: ${this.partials.someType(model.type)}`,
      );
    }
  }

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: options?.headingLevel,
      }),
    );
  }

  return md.join('\n');
}
