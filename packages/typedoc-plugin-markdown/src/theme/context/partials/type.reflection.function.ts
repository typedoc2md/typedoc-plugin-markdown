import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { SignatureReflection, SomeType } from 'typedoc';

export function functionType(
  this: MarkdownThemeContext,
  model: SignatureReflection[],
  options?: { forceParameterType?: boolean; typeSeparator?: string },
): string {
  const shouldFormat = this.options.getValue('useCodeBlocks');
  const typeSeparator = options?.typeSeparator || ' => ';
  const functions = model.map((fn) => {
    const typeParams = fn.typeParameters
      ? `${this.helpers.getAngleBracket('<')}${fn.typeParameters
          .map((typeParameter) => backTicks(typeParameter.name))
          .join(', ')}${this.helpers.getAngleBracket('>')}`
      : '';
    const showParameterType =
      options?.forceParameterType || this.options.getValue('expandParameters');

    const params = fn.parameters
      ? fn.parameters.map((param) => {
          const paramType = this.partials.someType(param.type as SomeType);
          const paramItem = [
            `${param.flags?.isRest ? '...' : ''}${backTicks(param.name)}${
              param.flags?.isOptional ? '?' : ''
            }`,
          ];
          if (showParameterType) {
            paramItem.push(paramType);
          }
          return paramItem.join(': ');
        })
      : [];
    const returns = this.partials.someType(fn.type as SomeType);
    return (
      typeParams +
      `${shouldFormat && model.length > 1 ? '  ' : ''}(${params.join(', ')})${typeSeparator}${returns}`
    );
  });
  const join = shouldFormat ? ';\n' : '; ';
  return functions.join(join);
}
