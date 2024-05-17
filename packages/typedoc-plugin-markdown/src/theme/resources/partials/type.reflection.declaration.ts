import { backTicks } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, SomeType } from 'typedoc';

/**
 * @category Type Partials
 */
export function declarationType(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
): string {
  const shouldFormat = this.options.getValue('useCodeBlocks');

  if (model.indexSignature || model.children) {
    let indexSignature = '';
    const declarationIndexSignature = model.indexSignature;
    if (declarationIndexSignature) {
      const key = declarationIndexSignature.parameters
        ? declarationIndexSignature.parameters.map(
            (param) => `\`[${param.name}: ${param.type}]\``,
          )
        : '';
      const obj = this.partials.someType(
        declarationIndexSignature.type as SomeType,
      );
      indexSignature = `${key}: ${obj}; `;
    }

    const children = model.children;

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

        const theType = this.helpers.getDeclarationType(obj) as SomeType;

        const typeString =
          obj.defaultValue && obj.defaultValue !== '...'
            ? backTicks(obj.defaultValue)
            : this.partials.someType(theType);
        if (shouldFormat) {
          return `  ${name.join(' ')}: ${indentBlock(typeString, true)};\n`;
        }
        return `${name.join(' ')}: ${indentBlock(typeString, true)};`;
      });

    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return types
      ? `\\{${shouldFormat ? '\n' : ''}${types.join('')} \\}`
      : '\\{\\}';
  }
  return '\\{\\}';
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
