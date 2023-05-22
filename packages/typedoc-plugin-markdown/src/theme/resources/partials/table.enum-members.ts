import { DeclarationReflection, ReflectionType } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { stripLineBreaks } from '../../../support/utils';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';
import { getDeclarationType } from '../../helpers';

/**
 * @category Partials
 */
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
    row.push(backTicks(property.name));
    if (propertyType) {
      row.push(
        stripLineBreaks(backTicks(context.someType(propertyType, true))),
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
