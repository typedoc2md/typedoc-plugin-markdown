import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ParameterReflection, SomeType } from 'typedoc';

export function signatureParameters(
  this: MarkdownThemeContext,
  model: ParameterReflection[],
  options?: { forceExpandParameters?: boolean },
) {
  const format = this.options.getValue('useCodeBlocks');

  return (
    '(' +
    model
      .map((param) => {
        const paramsmd: string[] = [];
        if (param.flags?.isRest) {
          paramsmd.push('...');
        }
        const paramType = this.partials.someType(param.type as SomeType);
        const showParamType =
          (options?.forceExpandParameters ?? false) ||
          this.options.getValue('expandParameters');
        const optional =
          param.flags.isOptional || param.defaultValue ? '?' : '';

        const paramItem = [`${backTicks(`${param.name}${optional}`)}`];
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
