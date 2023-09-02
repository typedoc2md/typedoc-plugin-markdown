import { ParameterReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, bold, codeBlock } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

/**
 * @category Partials
 */
export function signatureMemberIdentifier(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  accessor?: string,
): string {
  const md: string[] = [];

  const useCodeBlocks = context.options.getValue('identifiersAsCodeBlocks');

  if (accessor) {
    md.push(backTicks(accessor) + ' ');
  }

  if (signature.parent && signature.parent.flags?.length > 0) {
    md.push(
      signature.parent.flags
        .map((flag) => `\`${flag.toLowerCase()}\``)
        .join(' ') + ' ',
    );
  }

  if (!['__call', '__type'].includes(signature.name)) {
    md.push(bold(escapeChars(signature.name)));
  }

  if (signature.typeParameters) {
    md.push(
      `<${signature.typeParameters
        .map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}>`,
    );
  }

  const getParameters = (parameters: ParameterReflection[] = []) => {
    const firstOptionalParamIndex = parameters.findIndex(
      (parameter) => parameter.flags.isOptional,
    );
    return parameters
      .map((param, i) => {
        const paramsmd: string[] = [];
        if (param.flags.isRest) {
          paramsmd.push('...');
        }
        const paramItem = `${backTicks(param.name)}${
          param.flags.isOptional ||
          (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
            ? '?'
            : ''
        }`;
        paramsmd.push(
          `${
            useCodeBlocks && parameters.length > 2 ? '\n    ' : ''
          }${paramItem}`,
        );
        return paramsmd.join('');
      })
      .join(`, `);
  };

  md.push(
    signature.parameters && signature.parameters?.length > 0
      ? `(${getParameters(signature.parameters)})`
      : '()',
  );

  if (signature.type) {
    md.push(`: ${context.someType(signature.type, true)}`);
  }

  return useCodeBlocks ? codeBlock(md.join('')) : `> ${md.join('')}`;
}
