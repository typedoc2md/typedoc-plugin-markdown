import { ParameterReflection, ReflectionKind } from 'typedoc';

import { MarkdownThemeRenderContext } from '../..';
import { backTicks, table } from '../../../support/elements';
import {
  formatTableDescriptionCol,
  stripLineBreaks,
} from '../../../support/utils';

/**
 * @category Partials
 */
export function parametersTable(
  context: MarkdownThemeRenderContext,
  parameters: ParameterReflection[],
): string {
  const parseParams = (current: any, acc: any) => {
    const shouldFlatten =
      current.type?.declaration?.kind === ReflectionKind.TypeLiteral &&
      current.type?.declaration?.children;
    return shouldFlatten
      ? [...acc, current, ...flattenParams(current)]
      : [...acc, current];
  };

  const flattenParams = (current: any) => {
    return current.type?.declaration?.children?.reduce(
      (acc: any, child: any) => {
        const childObj = {
          ...child,
          name: `${current.name}.${child.name}`,
        };
        return parseParams(childObj, acc);
      },
      [],
    );
  };

  const showDefaults = hasDefaultValues(parameters);

  const parsedParams = parameters.reduce(
    (acc: any, current: any) => parseParams(current, acc),
    [],
  );

  const hasComments = parsedParams.some((param) => Boolean(param.comment));

  const headers = [
    context.getTextContent('kind.parameter.singular'),
    context.getTextContent('label.type'),
  ];

  if (showDefaults) {
    headers.push(context.getTextContent('label.defaultValue'));
  }

  if (hasComments) {
    headers.push(context.getTextContent('label.description'));
  }

  const firstOptionalParamIndex = parameters.findIndex(
    (parameter) => parameter.flags.isOptional,
  );

  const rows: string[][] = [];

  parsedParams.forEach((parameter, i) => {
    const row: string[] = [];

    const isOptional =
      parameter.flags.isOptional ||
      (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);

    const rest = parameter.flags.isRest ? '...' : '';

    const optional = isOptional ? '?' : '';

    row.push(`${rest}${backTicks(parameter.name)}${optional}`);

    if (parameter.type) {
      row.push(stripLineBreaks(context.someType(parameter.type), false));
    }

    if (showDefaults) {
      row.push(getDefaultValue(parameter));
    }

    if (hasComments) {
      if (parameter.comment) {
        row.push(
          stripLineBreaks(
            formatTableDescriptionCol(context.comment(parameter.comment)),
          ),
        );
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return table(headers, rows);
}

function getDefaultValue(parameter: ParameterReflection) {
  return parameter.defaultValue && parameter.defaultValue !== '...'
    ? backTicks(parameter.defaultValue)
    : backTicks('undefined');
}

function hasDefaultValues(parameters: ParameterReflection[]) {
  const defaultValues = (parameters as ParameterReflection[]).map(
    (param) =>
      param.defaultValue !== '{}' &&
      param.defaultValue !== '...' &&
      !!param.defaultValue,
  );

  return !defaultValues.every((value) => !value);
}
