import * as Handlebars from 'handlebars';
import { DeclarationReflection, ReflectionType } from 'typedoc';
import { escapeChars, stripLineBreaks } from '../../utils';

export default function () {
  Handlebars.registerHelper(
    'propertyTable',
    function (this: DeclarationReflection[]) {
      const comments = this.map(
        (param) =>
          !!param.comment?.text?.trim() || !!param.comment?.shortText?.trim(),
      );
      const hasComments = !comments.every((value) => !value);

      const headers = ['Name', 'Type'];

      if (hasComments) {
        headers.push('Description');
      }

      const flattenParams = (current: any) => {
        return current.type?.declaration?.children?.reduce(
          (acc: any, child: any) => {
            const childObj = {
              ...child,
              name: `${current.name}.${child.name}`,
            };
            return parseParams(childObj, acc);
          },
          [],
        );
      };

      const parseParams = (current: any, acc: any) => {
        const shouldFlatten = current.type?.declaration?.children;

        return shouldFlatten
          ? [...acc, current, ...flattenParams(current)]
          : [...acc, current];
      };

      const properties = this.reduce(
        (acc: any, current: any) => parseParams(current, acc),
        [],
      );

      const rows = properties.map((property) => {
        const propertyType = property.type ? property.type : property;
        const row: string[] = [];
        const nameCol: string[] = [];
        const name =
          property.name.match(/[\\`\\|]/g) !== null
            ? escapeChars(getName(property))
            : `\`${getName(property)}\``;
        nameCol.push(name);
        row.push(nameCol.join(' '));
        row.push(
          Handlebars.helpers.type
            .call(propertyType)
            .replace(/(?<!\\)\|/g, '\\|'),
        );

        if (hasComments) {
          const comments = getComments(property);
          if (comments) {
            row.push(
              stripLineBreaks(
                Handlebars.helpers.comments.call(comments),
              ).replace(/\|/g, '\\|'),
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
    },
  );
}

function getName(property: DeclarationReflection) {
  const md: string[] = [];
  if (property.flags.isRest) {
    md.push('...');
  }
  if (property.getSignature) {
    md.push(
      Handlebars.helpers.signatureTitle.call(
        property.getSignature,
        'get',
        false,
      ),
    );
  } else if (property.setSignature) {
    md.push(
      Handlebars.helpers.signatureTitle.call(
        property.setSignature,
        'set',
        false,
      ),
    );
  } else {
    md.push(property.name);
  }
  if (property.flags.isOptional) {
    md.push('?');
  }
  return md.join('');
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
