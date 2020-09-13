import { ParameterReflection } from 'typedoc';
import { comment } from './comment';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function parameterTable(this: ParameterReflection[]) {
  const defaultValues = this.map((param) => !!param.defaultValue);
  const hasDefaultValues = !defaultValues.every((value) => !value);

  const comments = this.map(
    (param) =>
      (param.comment && !!param.comment.text) ||
      (param.comment && !!param.comment.shortText),
  );
  const hasComments = !comments.every((value) => !value);

  const headers = ['Name', 'Type'];

  if (hasDefaultValues) {
    headers.push('Default');
  }

  if (hasComments) {
    headers.push('Description');
  }

  const rows = this.map((parameter) => {
    const isOptional = parameter.flags.includes('Optional');

    const row = [
      `\`${parameter.flags.isRest ? '...' : ''}${parameter.name}${
        isOptional ? '?' : ''
      }\``,
      type.call(parameter.type),
    ];
    if (hasDefaultValues) {
      row.push(parameter.defaultValue ? parameter.defaultValue : '-');
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
