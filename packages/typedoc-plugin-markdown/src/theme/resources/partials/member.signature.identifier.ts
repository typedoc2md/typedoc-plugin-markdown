import { SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, bold, codeBlock } from '../markdown';
import { escapeChars } from '../utils';

export function signatureMemberIdentifier(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  opts?: {
    accessor?: string;
    includeType?: boolean;
  },
): string {
  const md: string[] = [];

  const DEFAULT_OPTIONS = {
    accessor: null,
    useCodeBlocks: false,
  };

  const options = { ...DEFAULT_OPTIONS, ...opts };
  const useCodeBlocks = context.options.getValue('useCodeBlocks');
  const keyword = context.helpers.getKeyword(signature.parent.kind);

  if (
    useCodeBlocks &&
    context.helpers.isGroupKind(signature.parent) &&
    keyword
  ) {
    md.push(keyword + ' ');
  }

  if (options?.accessor) {
    md.push(bold(backTicks(options?.accessor)) + ' ');
  }

  if (signature.parent && signature.parent.flags?.length > 0) {
    md.push(
      signature.parent.flags
        .map((flag) => bold(backTicks(flag.toLowerCase())))
        .join(' ') + ' ',
    );
  }

  if (!['__call', '__type'].includes(signature.name)) {
    md.push(bold(escapeChars(signature.name)));
  }

  if (signature.typeParameters) {
    md.push(
      `\\<${signature.typeParameters
        .map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  md.push(context.partials.signatureParameters(signature.parameters || []));

  if (signature.type) {
    md.push(`: ${context.partials.someType(signature.type)}`);
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `• ${result}`;
}
