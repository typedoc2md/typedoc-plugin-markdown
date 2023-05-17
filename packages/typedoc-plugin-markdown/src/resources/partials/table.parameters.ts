import { ParameterReflection, ReflectionKind } from 'typedoc';

import { MarkdownThemeRenderContext } from '../../render-context';
import { table } from '../../support/els';
import { tableComments } from '../../support/helpers';
import { escapeChars, stripLineBreaks } from '../../support/utils';

export function parametersTable(
  context: MarkdownThemeRenderContext,
  parameters: ParameterReflection[],
): string {
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

  const parseParams = (current: any, acc: any) => {
    const shouldFlatten =
      current.type?.declaration?.kind === ReflectionKind.TypeLiteral &&
      current.type?.declaration?.children;
    return shouldFlatten
      ? [...acc, current, ...flattenParams(current)]
      : [...acc, current];
  };
  const showDefaults = hasDefaultValues(parameters);

  const comments = parameters.map(
    (param) => !!param.comment?.hasVisibleComponent(),
  );
  const hasComments = !comments.every((value) => !value);

  const headers = ['Parameter', 'Type'];

  if (showDefaults) {
    headers.push('Default value');
  }

  if (hasComments) {
    headers.push('Description');
  }

  const firstOptionalParamIndex = parameters.findIndex(
    (parameter) => parameter.flags.isOptional,
  );

  const rows: string[][] = [];

  parameters.forEach((parameter, i) => {
    const row: string[] = [];

    const isOptional =
      parameter.flags.isOptional ||
      (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);

    const rest = parameter.flags.isRest ? '...' : '';

    const optional = isOptional ? '?' : '';

    row.push(`${rest}${escapeChars(parameter.name)}${optional}`);

    if (parameter.type) {
      row.push(stripLineBreaks(context.someType(parameter.type, 'object')));
    }

    if (showDefaults) {
      row.push(getDefaultValue(parameter));
    }
    if (hasComments) {
      if (parameter.comment) {
        row.push(tableComments(context.comment(parameter.comment)));
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
    ? escapeChars(parameter.defaultValue)
    : 'undefined';
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
