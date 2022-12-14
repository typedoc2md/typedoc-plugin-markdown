import { ParameterReflection, SignatureReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function signatureTitle(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  accessor?: string,
) {
  const md: string[] = ['> '];

  if (signature.parent && signature.parent.flags?.length > 0) {
    md.push(
      signature.parent.flags.map((flag) => `\`${flag}\``).join(' ') + ' ',
    );
  }

  if (accessor) {
    md.push(accessor + ' ');
  }

  if (!['__call', '__type'].includes(signature.name)) {
    md.push(`**${signature.name}**`);
  }

  if (signature.typeParameters) {
    md.push(
      `<${signature.typeParameters
        .map((typeParameter) => `\`${typeParameter.name}\``)
        .join(', ')}\\>`,
    );
  }

  const getParameters = (parameters: ParameterReflection[] = []) => {
    return parameters
      .map((param) => {
        const isDestructuredParam = param.name == '__namedParameters';
        const paramsmd: string[] = [];
        if (param.flags.isRest) {
          paramsmd.push('...');
        }
        const paramItem = `\`${
          isDestructuredParam ? '«destructured»' : param.name
        }${
          param.flags.isOptional || param.defaultValue ? '?' : ''
        }\`: ${context.partials.someType(param.type as SomeType, 'all')}`;
        paramsmd.push(paramItem);
        return paramsmd.join('');
      })
      .join(', ');
  };

  md.push(`(${getParameters(signature.parameters)})`);

  if (signature.type) {
    md.push(`: ${context.partials.someType(signature.type, 'object')}`);
  }
  return md.join('');
}
