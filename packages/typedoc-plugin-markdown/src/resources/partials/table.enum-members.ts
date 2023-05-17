import { DeclarationReflection, ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { getDeclarationType } from '../../support/helpers';
import { escapeChars, stripLineBreaks } from '../../support/utils';

export function enumMembersTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const comments = props.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = comments.some((value) => Boolean(value));

  const headers = ['Member', 'Value'];

  if (hasComments) {
    headers.push('Description');
  }

  const rows = props.map((property: DeclarationReflection) => {
    const propertyType = getDeclarationType(property);
    const row: string[] = [];
    row.push(escapeChars(property.name));
    if (propertyType) {
      row.push(
        stripLineBreaks(
          context.someType(propertyType, 'object').replace(/(?<!\\)\|/g, '\\|'),
        ),
      );
    }
    if (hasComments) {
      const comments = getComments(property);
      if (comments) {
        row.push(
          stripLineBreaks(context.comment(comments)).replace(/\|/g, '\\|'),
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

function getComments(property: DeclarationReflection) {
  if (property.type instanceof ReflectionType) {
    if (property.type?.declaration?.signatures) {
      return property.type?.declaration.signatures[0].comment;
    }
  }
  if (property.signatures) {
    return property.signatures[0].comment;
  }
  return property.comment;
}
