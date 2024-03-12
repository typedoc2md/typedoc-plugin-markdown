import { backTicks } from '@plugin/theme/lib/markdown';
import { SignatureReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an ReferenceType functions model to a string.
 *
 * @category Type Partials
 */
export function functionType(
  context: MarkdownThemeRenderContext,
  signatures: SignatureReflection[],
  forceParameterType = false,
): string {
  const functions = signatures.map((fn) => {
    const typeParams = fn.typeParameters
      ? `\\<${fn.typeParameters
          .map((typeParameter) => backTicks(typeParameter.name))
          .join(', ')}\\>`
      : [];
    const showParameterType =
      forceParameterType || context.options.getValue('expandParameters');

    const params = fn.parameters
      ? fn.parameters.map((param) => {
          const paramType = context.partials.someType(param.type as SomeType);
          const paramItem = [
            `${param.flags.isRest ? '...' : ''}${backTicks(param.name)}${
              param.flags.isOptional ? '?' : ''
            }`,
          ];
          if (showParameterType) {
            paramItem.push(paramType);
          }
          return paramItem.join(': ');
        })
      : [];
    const returns = context.partials.someType(fn.type as SomeType);
    return typeParams + `(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}
