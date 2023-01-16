import { DeclarationReflection, ReflectionType } from 'typedoc';
import { backTicks } from '../support/els';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function typeDeclarationList(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
) {
  const comments = props.map((param) => !!param.comment?.hasVisibleComponent());
  const hasComments = !comments.every((value) => !value);

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

  const items = properties.map((property) => {
    const propertyType = getPropertyType(property);
    const md: string[] = [];
    const name =
      property.name.match(/[\\`\\|]/g) !== null
        ? escapeChars(getName(context, property))
        : getName(context, property);

    const isParent = name.split('.')?.length === 1;

    if (hasComments) {
      const comments = getComments(property);
      if (comments) {
        md.push((isParent ? '' : '  ') + context.partials.comment(comments));
      }
      md.push('\n\n');
    }

    md.push(
      `${isParent ? '' : '  '}- ${backTicks(name)}: ${context.partials.someType(
        propertyType,
        isParent ? 'object' : 'none',
      )}`,
    );

    return md.join('\n');
  });

  const output = items.join('\n\n');

  return output;
}

function getPropertyType(property: any) {
  if (property.getSignature) {
    return property.getSignature.type;
  }
  if (property.setSignature) {
    return property.setSignature.type;
  }
  return property.type ? property.type : property;
}

function getName(
  context: MarkdownThemeRenderContext,
  property: DeclarationReflection,
) {
  const md: string[] = [];
  if (property.flags.isRest) {
    md.push('...');
  }
  if (property.getSignature) {
    md.push(`get ${property.getSignature.name}()`);
  } else if (property.setSignature) {
    md.push(
      `set ${
        property.setSignature.name
      }(${property.setSignature.parameters?.map((parameter) => {
        return parameter.type
          ? `${parameter.name}:${context.partials.someType(
              parameter.type,
              'all',
            )}`
          : '';
      })})`,
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
