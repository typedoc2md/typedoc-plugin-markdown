import { backTicks, bold, codeBlock } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { SignatureReflection } from 'typedoc';

/**
 * @category Member Partials
 */
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
    md.push(backTicks(options?.accessor) + ' ');
  }

  if (model.parent && model.parent.flags?.length > 0) {
    md.push(
      model.parent.flags
        .map((flag) => backTicks(flag.toLowerCase()))
        .join(' ') + ' ',
    );
  }

  if (!['__call', '__type'].includes(model.name)) {
    md.push(bold(escapeChars(model.name)));
  }

  if (model.typeParameters) {
    md.push(
      `\\<${model.typeParameters
        .map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  md.push(this.partials.signatureParameters(model.parameters || []));

  if (model.type) {
    md.push(`: ${this.partials.someType(model.type)}`);
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}
