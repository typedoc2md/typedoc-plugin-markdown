import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';
import { getDeclarationType } from '../../helpers';

/**
 * @category Partials
 */
export function declarationType(
  context: MarkdownThemeRenderContext,
  declarationReflection: DeclarationReflection,
  collapse = false,
  format = false,
): string {
  if (collapse) {
    return backTicks('object');
  }

  if (declarationReflection.indexSignature || declarationReflection.children) {
    let indexSignature = '';
    const declarationIndexSignature = declarationReflection.indexSignature;
    if (declarationIndexSignature) {
      const key = declarationIndexSignature.parameters
        ? declarationIndexSignature.parameters.map(
            (param) => `\`[${param.name}: ${param.type}]\``,
          )
        : '';
      const obj = context.someType(declarationIndexSignature.type as SomeType);
      indexSignature = `${key}: ${obj}; `;
    }

    const types =
      declarationReflection.children &&
      declarationReflection.children.map((obj, index) => {
        const name: string[] = [];
        if (Boolean(obj.getSignature || Boolean(obj.setSignature))) {
          if (obj.getSignature) {
            name.push('get');
          }
          if (obj.setSignature) {
            name.push('set');
          }
        }
        name.push(backTicks(obj.name));
        const theType = getDeclarationType(obj) as SomeType;

        const typeString = context.someType(theType);

        return `${name.join(' ')}: ${indentBlock(typeString, format)};${
          format ? '\n ' : ' '
        }`;
      });

    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return types ? `\\{${format ? '\n ' : ' '} ${types.join(' ')}}` : '\\{}';
  }
  return '\\{}';
}

function indentBlock(content: string, format: boolean) {
  const lines = content.split(`${format ? '\n ' : ' '}`);
  return lines
    .filter((line) => Boolean(line.length))
    .map((line, i) => {
      if (i === 0) {
        return line;
      }
      if (i === lines.length - 1) {
        return ` ${line}`;
      }
      return `  ${line}`;
    })
    .join(`${format ? '\n' : ''}`);
}
