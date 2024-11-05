import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ParameterReflection, SomeType } from 'typedoc';

export function signatureParameters(
  this: MarkdownThemeContext,
  model: ParameterReflection[],
) {
  const format = this.options.getValue('useCodeBlocks');
  const firstOptionalParamIndex = model.findIndex(
    (parameter) => parameter.flags.isOptional,
  );
  return (
    '(' +
    model
      .map((param, i) => {
        const paramsmd: string[] = [];
        if (param.flags.isRest) {
          paramsmd.push('...');
        }
        const paramType = this.partials.someType(param.type as SomeType);
        const showParamType = this.options.getValue('expandParameters');
        const paramItem = [
          `${backTicks(param.name)}${
            param.flags.isOptional ||
            (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
              ? '?'
              : ''
          }`,
        ];
        if (showParamType) {
          paramItem.push(paramType);
        }
        paramsmd.push(
          `${format && model.length > 2 ? `\n   ` : ''}${paramItem.join(': ')}`,
        );
        return paramsmd.join('');
      })
      .join(`, `) +
    ')'
  );
}
