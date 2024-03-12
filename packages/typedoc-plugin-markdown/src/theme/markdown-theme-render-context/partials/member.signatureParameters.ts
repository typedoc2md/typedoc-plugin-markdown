import { backTicks } from '@plugin/theme/lib/markdown';
import { ParameterReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders tha parameters of a signature in parenthisis.
 *
 * @category Member Partials
 */
export function signatureParameters(
  context: MarkdownThemeRenderContext,
  parameters: ParameterReflection[],
) {
  const format = context.options.getValue('useCodeBlocks');
  const firstOptionalParamIndex = parameters.findIndex(
    (parameter) => parameter.flags.isOptional,
  );
  return (
    '(' +
    parameters
      .map((param, i) => {
        const paramsmd: string[] = [];
        if (param.flags.isRest) {
          paramsmd.push('...');
        }
        const paramType = context.partials.someType(param.type as SomeType);
        const showParamType = context.options.getValue('expandParameters');
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
          `${format && parameters.length > 2 ? `\n   ` : ''}${paramItem.join(': ')}`,
        );
        return paramsmd.join('');
      })
      .join(`, `) +
    ')'
  );
}
