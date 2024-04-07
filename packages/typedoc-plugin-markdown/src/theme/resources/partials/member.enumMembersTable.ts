import { backTicks } from '@plugin/libs/markdown';
import { removeLineBreaks } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, ReflectionType } from 'typedoc';

/**
 * Renders enum members as a table.
 *
 * @category Member Partials
 */
export function enumMembersTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
): string {
  const comments = model.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = comments.some((value) => Boolean(value));

  const headers = [
    this.getText('kind.enumMember.singular'),
    this.getText('label.value'),
  ];

  if (hasComments) {
    headers.push(this.getText('label.description'));
  }

  const rows = model.map((property: DeclarationReflection) => {
    const propertyType = this.helpers.getDeclarationType(property);
    const row: string[] = [];
    const nameColumn: string[] = [];

    if (this.options.getValue('useHTMLAnchors') && property.anchor) {
      nameColumn.push(
        `<a id="${property.anchor}" name="${property.anchor}"></a>`,
      );
    }

    nameColumn.push(backTicks(property.name));

    row.push(nameColumn.join(' '));
    if (propertyType) {
      row.push(removeLineBreaks(this.partials.someType(propertyType)));
    }
    if (hasComments) {
      const comments = getComments(property);
      if (comments) {
        row.push(this.partials.comment(comments, { isTableColumn: true }));
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
