import { DeclarationReflection, ReflectionType } from 'typedoc';
import { backTicks, table } from '../support/els';
import { getDeclarationType, tableComments } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function propertiesTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
) {
  const comments = props.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = comments.some((value) => Boolean(value));
  const hasModifiers = props.some((prop) => prop.flags.length);

  const headers = ['Property'];

  if (hasModifiers) {
    headers.push('Modifiers');
  }

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

    let prefix = '';
    if (property.name.split('.').length > 1) {
      prefix = '\\> ';
    }

    row.push(prefix + context.partials.declarationMemberName(property, false));

    if (hasModifiers) {
      if (property.flags.length) {
        row.push(
          property.flags.map((flag) => backTicks(flag.toLowerCase())).join(' '),
        );
      } else {
        row.push('-');
      }
    }

    if (propertyType) {
      row.push(
        tableComments(context.partials.someType(propertyType, 'object')),
      );
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
