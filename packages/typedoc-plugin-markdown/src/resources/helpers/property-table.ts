import { DeclarationReflection } from 'typedoc';
import { ReflectionType } from 'typedoc/dist/lib/models';

import MarkdownTheme from '../../theme';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function propertyTable(this: DeclarationReflection[]) {
  const comments = this.map(
    (param) => (param.comment && !!param.comment.text) || (param.comment && !!param.comment.shortText),
  );
  const hasComments = !comments.every((value) => !value);

  const headers = ['Name', 'Type'];

  if (hasComments) {
    headers.push('Description');
  }

  const rows = this.map((property) => {
    const typeOut = property.signatures || property.children ? type.call(property) : type.call(property.type);
    const row = [];
    const nameCol = [];
    if (property.flags.length) {
      const flags = property.flags.map((flag) => `**\`${flag}\`**`);
      nameCol.push(flags.join(' '));
    }

    nameCol.push(`\`${property.name}\``);
    row.push(nameCol.join(' '));
    row.push(typeOut ? typeOut.toString().replace(/\|/g, '&#124;') : '');

    const hasTypeDeclarations = property.type instanceof ReflectionType;

    if (hasComments || hasTypeDeclarations) {
      const commentsText = [];
      if (property.comment && property.comment.shortText) {
        commentsText.push(
          MarkdownTheme.handlebars.helpers.comment.call(stripLineBreaks.call(property.comment.shortText)),
        );
      }
      if (property.comment && property.comment.text) {
        commentsText.push(MarkdownTheme.handlebars.helpers.comment.call(stripLineBreaks.call(property.comment.text)));
      }

      row.push(commentsText.length > 0 ? commentsText.join(' ') : '-');
    }

    return `${row.join(' | ')} |\n`;
  });

  const output = `\n${headers.join(' | ')} |\n${headers.map(() => '------').join(' | ')} |\n${rows.join('')}`;

  return output;
}
