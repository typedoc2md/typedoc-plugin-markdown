import { SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, bold, codeBlock } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';
import {
  KEYWORD_MAP,
  getSignatureParameters,
  isGroupKind,
} from '../../helpers';

/**
 * @category Partials
 */
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

  if (
    useCodeBlocks &&
    isGroupKind(signature.parent) &&
    KEYWORD_MAP[signature.parent.kind]
  ) {
    md.push(KEYWORD_MAP[signature.parent.kind] + ' ');
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

  md.push(getSignatureParameters(signature.parameters || [], useCodeBlocks));

  if (signature.type) {
    md.push(`: ${context.someType(signature.type)}`);
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}
