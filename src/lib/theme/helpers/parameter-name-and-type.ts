import { ParameterReflection } from 'typedoc';
import { type } from './type';

export function parameterNameAndType(this: ParameterReflection) {
  const md = [];
  md.push('■');
  md.push(`\`${this.flags.isRest ? '...' : ''} ${this.name}\``);
  if (this.type) {
    md.push(`: *${type.call(this.type)}*`);
  }
  return md.join('');
}
