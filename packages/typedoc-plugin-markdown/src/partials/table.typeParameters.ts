import { TypeParameterReflection } from 'typedoc';
import { stripLineBreaks } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function typeParametersTable(
  context: MarkdownThemeRenderContext,
  props: TypeParameterReflection[],
) {
  return table(context, props);
}

function table(context: MarkdownThemeRenderContext, parameters: any) {
  const showTypeCol = hasTypes(parameters);

  const comments = parameters.map(
    (param) => !!param.comment?.hasVisibleComponent(),
  );

  const hasComments = !comments.every((value) => !value);

  const headers = ['Name'];

  if (showTypeCol) {
    headers.push('Type');
  }

  if (hasComments) {
    headers.push('Description');
  }

  const rows = parameters.map((parameter) => {
    const row: string[] = [];

    row.push(`\`${parameter.name}\``);

    if (showTypeCol) {
      const typeCol: string[] = [];
      if (!parameter.type && !parameter.default) {
        typeCol.push(`\`${parameter.name}\``);
      }
      if (!!parameter.type) {
        typeCol.push(
          `extends ${context.partials.someType(parameter.type, 'object')}`,
        );
      }
      if (!!parameter.default) {
        typeCol.push(' = ');
        typeCol.push(context.partials.someType(parameter.default));
      }
      row.push(typeCol.join(''));
    }

    if (hasComments) {
      if (parameter.comment?.summary) {
        row.push(
          stripLineBreaks(
            context.partials.comment(parameter.comment?.summary),
          ).replace(/\|/g, '\\|'),
        );
      } else {
        row.push('-');
      }
    }
    return `| ${row.join(' | ')} |`;
  });

  const output = `| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.join('')}`;
  return output;
}

function hasTypes(parameters: TypeParameterReflection[]) {
  const types = (parameters as TypeParameterReflection[]).map(
    (param) => !!param.type || !!param.default,
  );
  return types.some((value) => value);
}
