import {
  ParameterReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';

import { memberSymbol } from './member-symbol';
import { type } from './type';

export function signatureTitle(
  this: SignatureReflection,
  accessor?: string,
  standalone = true,
) {
  const md: string[] = [];

  if (standalone) {
    md.push(`${memberSymbol.call(this)} `);
  }

  if (this.parent && this.parent.flags?.length > 0) {
    md.push(this.parent.flags.map((flag) => `\`${flag}\``).join(' ') + ' ');
  }

  if (accessor) {
    md.push(`\`${accessor}\` **${this.name}**`);
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
  md.push(`(${getParameters(this.parameters)})`);

  if (this.type && !this.parent?.kindOf(ReflectionKind.Constructor)) {
    md.push(`: ${type.call(this.type, 'object')}`);
  }
  return md.join('') + (standalone ? '\n' : '');
}

const getParameters = (
  parameters: ParameterReflection[] = [],
  backticks = true,
) => {
  return parameters
    .map((param) => {
      const paramsmd: string[] = [];
      if (param.flags.isRest) {
        paramsmd.push('...');
      }
      const paramItem = `${param.name}${
        param.flags.isOptional || param.defaultValue ? '?' : ''
      }`;
      paramsmd.push(backticks ? `\`${paramItem}\`` : paramItem);
      return paramsmd.join('');
    })
    .join(', ');
};
