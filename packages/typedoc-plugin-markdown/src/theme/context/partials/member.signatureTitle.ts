import { backTicks, bold, codeBlock } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ReflectionKind, SignatureReflection } from 'typedoc';

export function signatureTitle(
  this: MarkdownThemeContext,
  model: SignatureReflection,
  options?: {
    accessor?: string;
    includeType?: boolean;
  },
): string {
  const md: string[] = [];

  const useCodeBlocks = this.options.getValue('useCodeBlocks');
  const keyword = this.helpers.getKeyword(model.parent.kind);

  if (useCodeBlocks && this.helpers.isGroupKind(model.parent) && keyword) {
    md.push(keyword + ' ');
  }

  if (options?.accessor) {
    md.push(bold(options?.accessor) + ' ');
  }

  if (model.parent) {
    const flagsString = this.helpers.getReflectionFlags(model.parent?.flags);
    if (flagsString.length) {
      md.push(this.helpers.getReflectionFlags(model.parent.flags) + ' ');
    }
  }

  if (!['__call', '__type'].includes(model.name)) {
    const name: string[] = [];
    if (model.kind === ReflectionKind.ConstructorSignature) {
      name.push('new');
    }
    name.push(escapeChars(model.name));
    md.push(bold(name.join(' ')));
  }

  if (model.typeParameters) {
    md.push(
      `${this.helpers.getAngleBracket('<')}${model.typeParameters
        .map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}${this.helpers.getAngleBracket('>')}`,
    );
  }

  md.push(this.partials.signatureParameters(model.parameters || []));

  if (model.type) {
    md.push(`: ${this.partials.someType(model.type)}`);
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}
