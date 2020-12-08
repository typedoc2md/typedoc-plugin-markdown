import {
  DeclarationReflection,
  ParameterReflection,
  ReflectionKind,
} from 'typedoc';
import { ReflectionType } from 'typedoc/dist/lib/models';

import { escape } from './escape';
import { memberSymbol } from './member-symbol';
import { stripComments } from './strip-comments';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function declarationTitle(
  this: ParameterReflection | DeclarationReflection,
) {
  const md = [memberSymbol.call(this) + ' '];
  if (this.flags && !this.flags.isRest) {
    md.push(this.flags.map((flag) => `\`${flag}\``).join(' '));
  }
  md.push(`${this.flags.isRest ? '... ' : ' '}**${escape(this.name)}**`);
  if (this instanceof DeclarationReflection && this.typeParameters) {
    md.push(
      `<${this.typeParameters
        .map((typeParameter) => typeParameter.name)
        .join(', ')}\\>`,
    );
  }

  md.push(`: ${this.parent?.kindOf(ReflectionKind.Enum) ? '' : getType(this)}`);

  if (this.defaultValue) {
    md.push(` = ${stripLineBreaks(escape(stripComments(this.defaultValue)))}`);
  }
  return md.join('');
}

function getType(reflection: ParameterReflection | DeclarationReflection) {
  return type.call(
    reflection.type ? reflection.type : reflection,
    shouldCollapse(reflection),
  );
}

function shouldCollapse(
  reflection: ParameterReflection | DeclarationReflection,
) {
  if (reflection.kindOf(ReflectionKind.ObjectLiteral)) {
    return true;
  }
  if (reflection.kindOf(ReflectionKind.Variable)) {
    const type = reflection.type as ReflectionType;
    if (type.declaration && type.declaration.signatures) {
      return false;
    }
    return true;
  }
  return false;
}
