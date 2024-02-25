import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../markdown';

export function declarationType(
  context: MarkdownThemeRenderContext,
  declarationReflection: DeclarationReflection,
): string {
  const shouldFormat = context.options.getValue('useCodeBlocks');

  if (declarationReflection.indexSignature || declarationReflection.children) {
    let indexSignature = '';
    const declarationIndexSignature = declarationReflection.indexSignature;
    if (declarationIndexSignature) {
      const key = declarationIndexSignature.parameters
        ? declarationIndexSignature.parameters.map(
            (param) => `\`[${param.name}: ${param.type}]\``,
          )
        : '';
      const obj = context.partials.someType(
        declarationIndexSignature.type as SomeType,
      );
      indexSignature = `${key}: ${obj}; `;
    }

    const children = declarationReflection.children;

    const types =
      children &&
      children.map((obj) => {
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

        const theType = context.helpers.getDeclarationType(obj) as SomeType;

        const typeString =
          obj.defaultValue && obj.defaultValue !== '...'
            ? obj.defaultValue
            : context.partials.someType(theType);
        if (shouldFormat) {
          return `  ${name.join(' ')}: ${indentBlock(typeString, true)};\n`;
        }
        return `${name.join(' ')}: ${indentBlock(typeString, true)};`;
      });

    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return types
      ? `\\{${shouldFormat ? '\n' : ''}${types.join('')}  }`
      : '\\{}';
  }
  return '\\{}';
}

function indentBlock(content: string, format: boolean) {
  const lines = content.split(`${'\n'}`);
  return lines
    .filter((line) => Boolean(line.length))
    .map((line, i) => {
      if (i === 0) {
        return line;
      }
      if (i === lines.length - 1) {
        return line.trim().startsWith('}') ? line : `   ${line}`;
      }
      return `   ${line}`;
    })
    .join(`${`\n`}`);
}
