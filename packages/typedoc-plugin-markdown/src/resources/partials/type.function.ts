import { SignatureReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';

export function functionType(
  context: MarkdownThemeRenderContext,
  modelSignatures: SignatureReflection[],
): string {
  const functions = modelSignatures.map((fn) => {
    const typeParams = fn.typeParameters
      ? `\\<${fn.typeParameters
          .map((typeParameter) => typeParameter.name)
          .join(', ')}\\>`
      : [];
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.flags.isRest ? '...' : ''}${param.name}${
            param.flags.isOptional ? '?' : ''
          }: ${context.someType(param.type as SomeType)}`;
        })
      : [];
    const returns = context.someType(fn.type as SomeType);
    return typeParams + `(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}
