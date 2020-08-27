import { DeclarationReflection, ParameterReflection } from 'typedoc';
import { IntrinsicType } from 'typedoc/dist/lib/models';

import { type } from './type';

export function declarationTitle(
  this: ParameterReflection | DeclarationReflection,

  expandType = true,
) {
  const md = [];

  if (this.flags && !this.flags.isRest) {
    md.push(this.flags.map((flag) => `\`${flag}\` `).join(' '));
  }

  md.push(`${this.flags.isRest ? '...' : ''} **${this.name}**`);

  const type = getType(this, expandType);
  if (type) {
    md.push(`: ${type}`);
  }
  if (this.defaultValue) {
    md.push(` = ${this.defaultValue}`);
  }
  return md.join('');
}

function getType(reflection: ParameterReflection | DeclarationReflection, expandType: boolean) {
  if (reflection.type instanceof IntrinsicType && reflection.type.name === 'object') {
    return type.call(reflection, expandType);
  }
  if (reflection instanceof DeclarationReflection && reflection.signatures) {
    return type.call(reflection, expandType);
  }
  return type.call(reflection.type, expandType);
}
