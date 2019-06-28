import { ParameterReflection } from 'typedoc';

import { type } from './type';

export function parameterNameAndType(this: ParameterReflection) {
  const md = [];
  md.push('▪');
  if (this.flags && !this.flags.isRest) {
    md.push(this.flags.map(flag => `\`${flag}\` `));
  }
  md.push(`${this.flags.isRest ? '...' : ''} **${this.name}**`);
  if (this.type) {
    md.push(`: *${type.call(this.type)}*`);
  }
  if (this.defaultValue) {
    md.push(`= ${this.defaultValue}`);
  }
  return md.join('');
}
