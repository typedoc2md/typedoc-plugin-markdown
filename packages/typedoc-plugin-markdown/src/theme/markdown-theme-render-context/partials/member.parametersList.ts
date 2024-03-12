import { backTicks, bold } from '@plugin/theme/lib/markdown';
import { escapeChars } from '@plugin/theme/lib/utils';
import { ParameterReflection, ReflectionKind, ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders parameters section as a list.
 *
 * @category Member Partials
 */
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

    if (parameter.type && !(parameter.type instanceof ReflectionType)) {
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
