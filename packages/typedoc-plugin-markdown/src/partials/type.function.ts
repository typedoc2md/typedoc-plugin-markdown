import { SignatureReflection, SomeType } from 'typedoc';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function functionType(
  context: MarkdownThemeRenderContext,
  modelSignatures: SignatureReflection[],
) {
  const functions = modelSignatures.map((fn) => {
    const typeParams = fn.typeParameters
      ? escapeChars(
          `<${fn.typeParameters
            .map((typeParameter) => typeParameter.name)
            .join(', ')}>`,
          '<>',
        )
      : [];
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.flags.isRest ? '...' : ''}\`${param.name}${
            param.flags.isOptional ? '?' : ''
          }\`: ${context.partials.someType(param.type as SomeType)}`;
        })
      : [];
    const returns = context.partials.someType(fn.type as SomeType);
    return typeParams + `(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}
