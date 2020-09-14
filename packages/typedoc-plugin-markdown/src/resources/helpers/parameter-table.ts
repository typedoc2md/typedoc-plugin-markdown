import { ParameterReflection, TypeParameterReflection } from 'typedoc';
import { comment } from './comment';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function parameterTable(
  this: ParameterReflection[] | TypeParameterReflection[],
  kind: 'typeParameters' | 'parameters',
) {
  const showDefaults = hasDefaultValues(kind, this);
  const showType = kind === 'parameters';
  const parameters = this as ParameterReflection[];
  const comments = parameters.map(
    (param) =>
      (param.comment && !!param.comment.text) ||
      (param.comment && !!param.comment.shortText),
  );
  const hasComments = !comments.every((value) => !value);

  const headers = ['Name'];

  if (showType) {
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

    if (showType) {
      row.push(type.call(parameter.type, true));
    }

    if (showDefaults) {
      row.push(getDefaultValue(parameter));
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
