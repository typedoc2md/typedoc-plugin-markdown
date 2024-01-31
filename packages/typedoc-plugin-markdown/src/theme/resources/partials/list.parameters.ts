import { ParameterReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, bold } from '../markdown';
import { escapeChars } from '../utils';

export function parametersList(
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
          name: `${current.name}\\.${child.name}`,
        };
        return parseParams(childObj, acc);
      },
      [],
    );
  };

  const parsedParams = parameters.reduce(
    (acc: any, current: any) => parseParams(current, acc),
    [],
  );

  const firstOptionalParamIndex = parameters.findIndex(
    (parameter) => parameter.flags.isOptional,
  );

  const rows: string[] = [];

  parsedParams.forEach((parameter, i) => {
    const row: string[] = [];

    const isOptional =
      parameter.flags.isOptional ||
      (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);

    const rest = parameter.flags.isRest ? '...' : '';

    const optional = isOptional ? '?' : '';

    const name = `${escapeChars(parameter.name)}${optional}`;

    const identifier: string[] = [bold(name)];

    if (parameter.type) {
      identifier.push(': ' + context.partials.someType(parameter.type));
    }

    if (parameter.defaultValue) {
      identifier.push(
        '= ' + backTicks(context.helpers.getParameterDefaultValue(parameter)),
      );
    }

    row.push(`• ${rest}${identifier.join('')}`);

    if (parameter.comment) {
      row.push(context.partials.comment(parameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
