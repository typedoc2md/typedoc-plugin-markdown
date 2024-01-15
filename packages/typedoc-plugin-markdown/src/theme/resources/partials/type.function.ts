import { SignatureReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function functionType(
  context: MarkdownThemeRenderContext,
  modelSignatures: SignatureReflection[],
): string {
  const { backTicks } = context.markdown;
  const functions = modelSignatures.map((fn) => {
    const typeParams = fn.typeParameters
      ? `\\<${fn.typeParameters
          .map((typeParameter) => backTicks(typeParameter.name))
          .join(', ')}\\>`
      : [];
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.flags.isRest ? '...' : ''}${backTicks(param.name)}${
            param.flags.isOptional ? '?' : ''
          }`;
        })
      : [];
    const returns = context.partials.someType(fn.type as SomeType);
    return typeParams + `(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}
