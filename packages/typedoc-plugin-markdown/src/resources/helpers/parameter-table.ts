import {
  ParameterReflection,
  ReflectionKind,
  TypeParameterReflection,
} from 'typedoc';

import { comment } from './comment';
import { escape } from './escape';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function parameterTable(
  this: ParameterReflection[] & TypeParameterReflection[],
  kind: 'typeParameters' | 'parameters',
) {
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

  return table(
    this.reduce((acc: any, current: any) => parseParams(current, acc), []),
    kind,
  );
}

function table(parameters: any, kind: 'typeParameters' | 'parameters') {
  const showDefaults = hasDefaultValues(kind, parameters);
  const showTypes = kind === 'parameters' ? true : hasTypes(parameters);

  const comments = parameters.map(
    (param) =>
      !!param.comment?.text?.trim() || !!param.comment?.shortText?.trim(),
  );
  const hasComments = !comments.every((value) => !value);

  const headers = ['Name'];

  if (showTypes) {
    headers.push('Type');
  }

  if (showDefaults) {
    headers.push(kind === 'parameters' ? 'Default value' : 'Default');
  }

  if (hasComments) {
    headers.push('Description');
  }

  const rows = parameters.map((parameter) => {
    const row: string[] = [];

    row.push(
      `\`${parameter.flags.isRest ? '...' : ''}${parameter.name}${
        parameter.flags.isOptional ? '?' : ''
      }\``,
    );

    if (showTypes) {
      row.push(parameter.type ? type.call(parameter.type, 'object') : '-');
    }

    if (showDefaults) {
      row.push(getDefaultValue(parameter));
    }
    if (hasComments) {
      if (parameter.comment) {
        row.push(
          stripLineBreaks(comment.call(parameter.comment)).replace(
            /\|/g,
            '\\|',
          ),
        );
      } else {
        row.push('-');
      }
    }
    return `| ${row.join(' | ')} |\n`;
  });

  const output = `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.join('')}`;
  return output;
}

function getDefaultValue(
  parameter: ParameterReflection | TypeParameterReflection,
) {
  if (parameter instanceof TypeParameterReflection) {
    return parameter.default ? type.call(parameter.default) : '-';
  }
  return parameter.defaultValue && parameter.defaultValue !== '...'
    ? escape(parameter.defaultValue)
    : '-';
}

function hasDefaultValues(
  kind: 'typeParameters' | 'parameters',
  parameters: ParameterReflection[] | TypeParameterReflection[],
) {
  const defaultValues =
    kind === 'parameters'
      ? (parameters as ParameterReflection[]).map(
          (param) => param.defaultValue !== '...' && !!param.defaultValue,
        )
      : (parameters as TypeParameterReflection[]).map(
          (param) => !!param.default,
        );
  return !defaultValues.every((value) => !value);
}

function hasTypes(
  parameters: TypeParameterReflection[] | ParameterReflection[],
) {
  const types = (parameters as TypeParameterReflection[]).map(
    (param) => !!param.type,
  );
  return !types.every((value) => !value);
}
