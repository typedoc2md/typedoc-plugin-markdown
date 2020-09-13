import { DeclarationReflection } from 'typedoc';
import { ReflectionKind } from 'typedoc/dist/lib/models';
import { comment } from './comment';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function propertyTable(
  this: DeclarationReflection[],
  kind: ReflectionKind,
) {
  const commentsMap = this.map(
    (param) =>
      (param.comment && !!param.comment.text) ||
      (param.comment && !!param.comment.shortText),
  );
  const hasComments = !commentsMap.every((value) => !value);
  const hasValues = kind === ReflectionKind.ObjectLiteral;
  const headers = ['Name', 'Type'];
  if (hasValues) {
    headers.push('Value');
  }
  if (hasComments) {
    headers.push('Description');
  }

  const rows = this.map((property) => {
    const propertyType =
      property.signatures || property.children ? property : property.type;
    const row: string[] = [];
    const nameCol: string[] = [];
    if (property.flags.length) {
      const flags = property.flags.map((flag) => `**\`${flag}\`**`);
      nameCol.push(flags.join(' '));
    }

    nameCol.push(`\`${property.name}\``);
    row.push(nameCol.join(' '));
    row.push(type.call(propertyType, kind !== ReflectionKind.ObjectLiteral));

    if (hasValues) {
      row.push(
        property.defaultValue
          ? stripLineBreaks(property.defaultValue)
          : type.call(propertyType, true),
      );
    }

    if (hasComments) {
      if (property.comment) {
        row.push(stripLineBreaks(comment.call(property.comment)));
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
