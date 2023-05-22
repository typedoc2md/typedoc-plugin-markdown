import { SignatureReflection, SomeType } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
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
          return `${param.flags.isRest ? '...' : ''}${backTicks(param.name)}${
            param.flags.isOptional ? '?' : ''
          }`;
        })
      : [];
    const returns = context.someType(fn.type as SomeType);
    return typeParams + `(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}
