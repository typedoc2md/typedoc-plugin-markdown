import { DeclarationReflection, ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';
import { stripLineBreaks } from '../../../support/utils';
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
  const hasSources = !context.options.getValue('disableSources');

  const headers = [
    context.getTextContent('kind.enum-member.singular'),
    context.getTextContent('label.value'),
  ];

  if (hasComments) {
    headers.push(context.getTextContent('label.description'));
  }

  if (hasSources) {
    headers.push(context.getTextContent('label.source'));
  }

  const rows = props.map((property: DeclarationReflection) => {
    const propertyType = getDeclarationType(property);
    const row: string[] = [];
    const nameColumn: string[] = [];

    if (
      context.options.getValue('namedAnchors')?.tableRows &&
      property.anchor
    ) {
      nameColumn.push(
        `<a id="${property.anchor}" name="${property.anchor}"></a>`,
      );
    }

    nameColumn.push(backTicks(property.name));

    row.push(nameColumn.join(' '));
    if (propertyType) {
      row.push(stripLineBreaks(context.someType(propertyType)));
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

    if (hasSources) {
      row.push(context.sources(property, -1));
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
