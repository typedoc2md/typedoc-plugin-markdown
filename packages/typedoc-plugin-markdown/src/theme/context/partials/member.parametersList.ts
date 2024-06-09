import { backTicks, bold } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { ParameterReflection, ReflectionKind, ReflectionType } from 'typedoc';

/**
 * @category Member Partials
 */
export function parametersList(
  this: MarkdownThemeContext,
  model: ParameterReflection[],
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

  const parsedParams = model.reduce(
    (acc: any, current: any) => parseParams(current, acc),
    [],
  );

  const firstOptionalParamIndex = model.findIndex(
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
      identifier.push(': ' + this.partials.someType(parameter.type));
    }

    if (parameter.defaultValue) {
      identifier.push(
        ' = ' + backTicks(this.helpers.getParameterDefaultValue(parameter)),
      );
    }

    row.push(`• ${rest}${identifier.join('')}`);

    if (parameter.comment) {
      row.push(this.partials.comment(parameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
