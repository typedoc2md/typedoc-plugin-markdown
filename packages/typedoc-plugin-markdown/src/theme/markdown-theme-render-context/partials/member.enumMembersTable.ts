import { backTicks } from '@plugin/theme/lib/markdown';
import {
  formatTableDescriptionCol,
  formatTableTypeCol,
} from '@plugin/theme/lib/utils';
import { DeclarationReflection, ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders enum members as a table.
 *
 * @category Member Partials
 */
export function enumMembersTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const comments = props.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = comments.some((value) => Boolean(value));

  const headers = [
    context.helpers.getText('kind.enumMember.singular'),
    context.helpers.getText('label.value'),
  ];

  if (hasComments) {
    headers.push(context.helpers.getText('label.description'));
  }

  const rows = props.map((property: DeclarationReflection) => {
    const propertyType = context.helpers.getDeclarationType(property);
    const row: string[] = [];
    const nameColumn: string[] = [];

    if (context.options.getValue('namedAnchors') && property.anchor) {
      nameColumn.push(
        `<a id="${property.anchor}" name="${property.anchor}"></a>`,
      );
    }

    nameColumn.push(backTicks(property.name));

    row.push(nameColumn.join(' '));
    if (propertyType) {
      row.push(formatTableTypeCol(context.partials.someType(propertyType)));
    }
    if (hasComments) {
      const comments = getComments(property);
      if (comments) {
        row.push(formatTableDescriptionCol(context.partials.comment(comments)));
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
