import { SignatureReflection } from 'typedoc';

import { memberSymbol } from './member-symbol';
import { type } from './type';

export function signatureTitle(this: SignatureReflection) {
  const md: string[] = [];

  md.push(`${memberSymbol.call(this)} `);

  if (this.parent && this.parent.flags) {
    md.push(this.parent.flags.map((flag) => `\`${flag}\``).join(' '));
  }

  if (this.name === '__get' && this.parent) {
    md.push(`get **${this.parent.name}**`);
  } else if (this.name === '__set' && this.parent) {
    md.push(`set **${this.parent.name}**`);
  } else if (this.name !== '__call' && this.name !== '__type') {
    md.push(`**${this.name}**`);
  }

  if (this.typeParameters) {
    md.push(
      `<${this.typeParameters
        .map((typeParameter) => typeParameter.name)
        .join(', ')}\\>`,
    );
  }

  const params = this.parameters
    ? this.parameters
        .map((param) => {
          const paramsmd: string[] = [];
          if (param.flags.isRest) {
            paramsmd.push('...');
          }
          paramsmd.push(`\`${param.name}`);
          if (param.flags.isOptional || param.defaultValue) {
            paramsmd.push('?');
          }
          paramsmd.push(`\`: ${type.call(param.type)}`);
          return paramsmd.join('');
        })
        .join(', ')
    : '';
  md.push(`(${params})`);
  if (this.type) {
    md.push(`: ${type.call(this.type, true)}`);
  }
  return md.join('') + '\n';
}
