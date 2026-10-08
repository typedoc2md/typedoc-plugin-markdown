import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, SomeType } from 'typedoc';

export function declarationType(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options?: { forceCollapse?: boolean },
): string {
  const shouldFormat = this.options.getValue('useCodeBlocks');

  const md: string[] = ['\\{'];
  if (model.indexSignatures?.length) {
    const indexSignatureMd: string[] = [];
    model.indexSignatures.forEach((indexSignature) => {
      const key = indexSignature.parameters
        ? indexSignature.parameters.map(
            (param) =>
              `\\[${backTicks(param.name)}: ${this.partials.someType(param.type)}\\]`,
          )
        : '';
      const obj = this.partials.someType(indexSignature.type as SomeType);
      indexSignatureMd.push(`${key}: ${obj};`);
    });
    md.push(indexSignatureMd.join('\n'));
  }

  if (model.signatures) {
    md.push(
      `${this.partials.functionType(model.signatures, { typeSeparator: ': ' })};`,
    );
  }

  if (model.children) {
    const children = model.children;

    const declarationTypes =
      children &&
      children.flatMap((obj) => {
        if (obj.signatures?.length) {
          const displayObjectName =
            obj.name + (obj.flags?.isOptional ? '?' : '');
          return obj.signatures.map((signature) => {
            const signatureString = `${backTicks(displayObjectName)}${this.partials.functionType(
              [signature],
              { typeSeparator: ': ' },
            )}`;
            if (shouldFormat) {
              return `  ${indentBlock(signatureString)};`;
            }
            return `${indentBlock(signatureString)};`;
          });
        }

        const name: string[] = [];

        if (obj.getSignature) {
          name.push('get');
          name.push(backTicks(obj.name) + '()');
        } else if (obj.setSignature) {
          name.push('set');
          const params = obj.setSignature.parameters
            ? this.partials.signatureParameters(obj.setSignature.parameters, {
                forceExpandParameters: true,
              })
            : '()';
          name.push(backTicks(obj.name) + params);
        } else {
          const displayObjectName =
            obj.name + (obj.flags?.isOptional ? '?' : '');
          name.push(backTicks(displayObjectName));
        }

        const theType = this.helpers.getDeclarationType(obj) as SomeType;

        const typeString = this.partials.someType(theType, options);

        if (shouldFormat) {
          return `  ${name.join(' ')}: ${indentBlock(typeString)};`;
        }
        return `${name.join(' ')}: ${indentBlock(typeString)};`;
      });

    if (declarationTypes) {
      md.push(
        `${shouldFormat ? `${declarationTypes.join('\n')}` : ` ${declarationTypes.join(' ')}`}`,
      );
    }
  }

  md.push(`${shouldFormat ? '' : ' '}\\}`);
  return md.join(shouldFormat ? '\n' : '');
}

function indentBlock(content: string) {
  const lines = content.split(`${'\n'}`);
  return lines
    .filter((line) => Boolean(line.length))
    .map((line, i) => {
      if (i === 0) {
        return line;
      }
      if (i === lines.length - 1) {
        return line.trim().startsWith('}') ? line : `  ${line}`;
      }
      return `   ${line}`;
    })
    .join(`${`\n`}`);
}
