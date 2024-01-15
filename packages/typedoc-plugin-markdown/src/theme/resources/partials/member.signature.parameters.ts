import { ParameterReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function signatureParameters(
  context: MarkdownThemeRenderContext,
  parameters: ParameterReflection[],
  format = false,
): string {
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
        const paramItem = `${context.markdown.backTicks(param.name)}${
          param.flags.isOptional ||
          (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
            ? '?'
            : ''
        }`;
        paramsmd.push(
          `${format && parameters.length > 2 ? `\n   ` : ''}${paramItem}`,
        );
        return paramsmd.join('');
      })
      .join(`, `) +
    ')'
  );
}
