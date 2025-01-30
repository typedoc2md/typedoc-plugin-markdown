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
      const unions: string[] = [];

      if (parameter.comment) {
        row.push(this.partials.comment(parameter.comment));
      }

      parameter.type?.types.forEach((type) => {
        const hasUsefulTypeDetails = this.helpers.hasUsefulTypeDetails(type);
        if (type instanceof ReflectionType) {
          const typeOut = this.partials.someType(type, {
            forceCollapse: true,
          });
          if (hasUsefulTypeDetails) {
            const usefulDetails: string[] = [];
            usefulDetails.push('\n\n');
            usefulDetails.push(typeOut);
            usefulDetails.push(
              getReflectionType(this, options, parameter, type),
            );
            usefulDetails.push('\n\n');
            unions.push(usefulDetails.join('\n\n'));
          } else {
            unions.push(typeOut);
          }
        } else {
          unions.push(this.partials.someType(type, { forceCollapse: true }));
        }
      });
      row.push(
        unions
          .join(' | ')
          .split('\n')
          .map((ln) => ln.trim())
          .join('\n'),
      );
    } else {
      if (parameter.type instanceof ReflectionType) {
        if (parameter.type.declaration?.signatures) {
          row.push(
            this.partials.someType(parameter.type, { forceCollapse: true }),
          );
        }
        row.push(
          `${'\n\n'}${getReflectionType(this, options, parameter, parameter.type)}`,
        );
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
  skipHeading = false,
) {
  const rest = parameter.flags.isRest ? '...' : '';
  const identifier: string[] = [];
  const md: string[] = [];
  if (!skipHeading) {
    identifier.push(
      context.partials.someType(parameter.type, { forceCollapse: true }),
    );
  }
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
  const flatten = flattenParams(
    {
      name: parameter.name,
      type,
    },
    true,
  );
  const block: string[] = [];
  const typeMd: string[] = [];
  if (parameter.comment) {
    block.push(context.partials.comment(parameter.comment));
  }
  flatten?.forEach((flat: ParameterReflection) => {
    const name = [flat.name];
    if (flat.flags.isOptional) {
      name.push('?');
    }
    typeMd.push('\n' + heading(options.headingLevel + 2, name.join('')));
    typeMd.push(getOtherType(context, flat));
  });
  block.push(typeMd.join('\n\n'));

  return block.join('\n\n');
}

function flattenParams(current: any, skip = false) {
  return current.type?.declaration?.children?.reduce((acc: any, child: any) => {
    const childObj = {
      ...child,
      name: skip ? child.name : `${current.name}.${child.name}`,
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
