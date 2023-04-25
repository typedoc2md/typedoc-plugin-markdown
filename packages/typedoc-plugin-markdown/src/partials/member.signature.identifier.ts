import { ParameterReflection, SignatureReflection, SomeType } from 'typedoc';
import { backTicks, bold } from '../support/els';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function signatureMemberIdentifier(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
) {
  const md: string[] = [];

  if (signature.parent && signature.parent.flags?.length > 0) {
    md.push(
      signature.parent.flags.map((flag) => `\`${flag}\``).join(' ') + ' ',
    );
  }

  if (!['__call', '__type'].includes(signature.name)) {
    md.push(bold(escapeChars(signature.name)));
  }

  if (signature.typeParameters) {
    md.push(
      `\\<${signature.typeParameters
        .map((typeParameter) => typeParameter.name)
        .join(', ')}\\>`,
    );
  }

  const getParameters = (parameters: ParameterReflection[] = []) => {
    const firstOptionalParamIndex = parameters.findIndex(
      (parameter) => parameter.flags.isOptional,
    );
    return parameters
      .map((param, i) => {
        const paramsmd: string[] = [parameters.length > 2 ? '\n  ' : ''];
        if (param.flags.isRest) {
          paramsmd.push('...');
        }
        const paramItem = `${escapeChars(param.name)}${
          param.flags.isOptional ||
          (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
            ? '?'
            : ''
        }: ${context.partials.someType(param.type as SomeType, 'all')}`;
        paramsmd.push(paramItem);
        if (param.defaultValue) {
          paramsmd.push(` = ${backTicks(param.defaultValue)}`);
        }
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
    md.push(`: ${context.partials.someType(signature.type, 'all')}`);
  }

  return md.join('');
}
