import { SignatureReflection } from 'typedoc';
import { type } from './type';

export function indexSignatureTitle(this: SignatureReflection) {
  const md = ['▪'];
  const parameters = this.parameters
    ? this.parameters.map((parameter) => {
        return `${parameter.name}: ${type.call(parameter.type)}`;
      })
    : [];
  md.push(`\[${parameters.join('')}\]: ${type.call(this.type)}`);
  return md.join(' ');
}
