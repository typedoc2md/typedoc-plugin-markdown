import { DeclarationReflection, ReflectionType } from 'typedoc';
import { backTicks, table } from '../support/els';
import { getDeclarationType, tableComments } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function propertiesTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
) {
  const comments = props.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = comments.some((value) => Boolean(value));

  const headers = ['Property'];

  headers.push('Type');

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

  const properties = props.reduce(
    (acc: any, current: any) => parseParams(current, acc),
    [],
  );

  const rows: string[][] = [];

  properties.forEach((property: DeclarationReflection) => {
    const propertyType = getDeclarationType(property);
    const row: string[] = [];

    const nameColumn: string[] = [];

    if (property.flags.length && !property.flags.isOptional) {
      nameColumn.push(
        property.flags.map((flag) => backTicks(flag.toLowerCase())).join(' '),
      );
    }

    nameColumn.push(
      `${context.partials.declarationMemberName(property, false)}${
        property.flags.isOptional ? '?' : ''
      }`,
    );

    row.push(nameColumn.join(' '));

    if (propertyType) {
      row.push(context.partials.someType(propertyType, 'object'));
    }

    if (hasComments) {
      const comments = getComments(property);
      if (comments) {
        row.push(tableComments(context.partials.comment(comments)));
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return table(headers, rows);
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
