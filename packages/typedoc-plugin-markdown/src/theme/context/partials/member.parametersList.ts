import { backTicks, heading } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  ParameterReflection,
  ReflectionKind,
  ReflectionType,
  SomeType,
  UnionType,
} from 'typedoc';

export function parametersList(
  this: MarkdownThemeContext,
  model: ParameterReflection[],
  options: { headingLevel: number },
): string {
  const firstOptionalParamIndex = model.findIndex(
    (parameter) => parameter.flags.isOptional,
  );

  const md: string[] = [];

  model.forEach((parameter, i) => {
    const row: string[] = [];

    const isOptional =
      parameter.flags.isOptional ||
      (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);

    const optional = isOptional ? '?' : '';

    const name = `${escapeChars(parameter.name)}${optional}`;

    row.push(heading(options.headingLevel + 1, name));

    if (parameter.type instanceof UnionType && parameter.type?.types) {
      const containsReflectionUnion = parameter.type.types.some(
        (type) => type instanceof ReflectionType,
      );

      const unions: string[] = [];

      parameter.type?.types.forEach((type) => {
        if (type instanceof ReflectionType) {
          unions.push(this.partials.someType(type, { forceCollapse: true }));
          unions.push(getReflectionType(this, options, parameter, type));
        } else {
          unions.push(this.partials.someType(type));
        }
      });
      if (containsReflectionUnion) {
        row.push(unions.join('\n\n'));
      } else {
        row.push(unions.join(' | '));
      }
    } else {
      if (parameter.type instanceof ReflectionType) {
        if (parameter.type.declaration?.signatures) {
          row.push(this.partials.someType(parameter.type));
        }
        row.push(getReflectionType(this, options, parameter, parameter.type));
      } else {
        row.push(getOtherType(this, parameter));
      }
    }

    md.push(row.join('\n\n'));
  });

  return md.join('\n\n');
}

function getOtherType(
  context: MarkdownThemeContext,
  parameter: ParameterReflection,
) {
  const rest = parameter.flags.isRest ? '...' : '';
  const identifier: string[] = [];
  const md: string[] = [];
  identifier.push(context.partials.someType(parameter.type));
  if (parameter.defaultValue) {
    identifier.push(
      ' = ' + backTicks(context.helpers.getParameterDefaultValue(parameter)),
    );
  }
  md.push(`${rest}${identifier.join('')}`);
  if (parameter.comment) {
    md.push(context.partials.comment(parameter.comment));
  }
  return md.join('\n\n');
}

function getReflectionType(
  context: MarkdownThemeContext,
  options: any,
  parameter: ParameterReflection,
  type: SomeType,
) {
  const flatten = flattenParams({
    name: parameter.name,
    type,
  });
  const block: string[] = [];
  const typeMd: string[] = [];
  if (parameter.comment) {
    block.push(context.partials.comment(parameter.comment));
  }
  flatten?.forEach((flat) => {
    typeMd.push(heading(options.headingLevel + 2, flat.name));
    typeMd.push(getOtherType(context, flat));
  });
  block.push(typeMd.join('\n\n'));

  return block.join('\n\n');
}

function flattenParams(current: any) {
  return current.type?.declaration?.children?.reduce((acc: any, child: any) => {
    const childObj = {
      ...child,
      name: `${current.name}.${child.name}`,
    };
    return parseParams(childObj, acc);
  }, []);
}

function parseParams(current: any, acc: any) {
  const shouldFlatten =
    current.type?.declaration?.kind === ReflectionKind.TypeLiteral &&
    current.type?.declaration?.children;
  return shouldFlatten
    ? [...acc, current, ...flattenParams(current)]
    : [...acc, current];
}
