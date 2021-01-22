import { ParameterReflection, TypeParameterReflection } from 'typedoc';

import { comment } from './comment';
import { escape } from './escape';
import { propertyTable } from './property-table';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function parameterTable(
  this: ParameterReflection[] | TypeParameterReflection[],
  kind: 'typeParameters' | 'parameters',
) {
  const parameters = this as ParameterReflection[];

  const hasNamedParams = parameters.some(
    (parameter) => parameter.name === '__namedParameters',
  );

  if (hasNamedParams) {
    return list(parameters);
  }

  return table(parameters, kind);
}

function list(parameters: any) {
  const output: string[] = [];
  parameters.forEach((parameter) => {
    output.push(`• **${parameter.name}**: ${type.call(parameter.type, true)}`);
    if (parameter.comment) {
      output.push(comment.call(parameter.comment));
    }
    if (parameter.type?.declaration && parameter.type.declaration.children) {
      output.push(propertyTable.call(parameter.type.declaration.children));
    }
  });
  return output.join('\n\n');
}

function table(
  parameters: ParameterReflection[],
  kind: 'typeParameters' | 'parameters',
) {
  const showDefaults = hasDefaultValues(kind, parameters);
  const showTypes = kind === 'parameters' ? true : hasTypes(parameters);

  const comments = parameters.map(
    (param) =>
      (param.comment && !!param.comment.text) ||
      (param.comment && !!param.comment.shortText),
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
      row.push(parameter.type ? type.call(parameter.type) : '-');
    }

    if (showDefaults) {
      row.push(escape(getDefaultValue(parameter)));
    }
    if (hasComments) {
      if (parameter.comment) {
        row.push(stripLineBreaks(comment.call(parameter.comment)));
      } else {
        row.push('-');
      }
    }
    return `${row.join(' | ')} |\n`;
  });

  const output = `\n${headers.join(' | ')} |\n${headers
    .map(() => '------')
    .join(' | ')} |\n${rows.join('')}`;
  return output;
}

function getDefaultValue(
  parameter: ParameterReflection | TypeParameterReflection,
) {
  if (parameter instanceof TypeParameterReflection) {
    return parameter.default ? type.call(parameter.default) : '-';
  }
  return parameter.defaultValue ? parameter.defaultValue : '-';
}

function hasDefaultValues(
  kind: 'typeParameters' | 'parameters',
  parameters: ParameterReflection[] | TypeParameterReflection[],
) {
  const defaultValues =
    kind === 'parameters'
      ? (parameters as ParameterReflection[]).map(
          (param) => !!param.defaultValue,
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
