import { DeclarationReflection, ParameterReflection } from 'typedoc';
import {
  LiteralType,
  ReflectionKind,
  ReflectionType,
} from 'typedoc/dist/lib/models';
import { escape } from './escape';
import { memberSymbol } from './member-symbol';
import { stripComments } from './strip-comments';
import { stripLineBreaks } from './strip-line-breaks';
import { type } from './type';

export function declarationTitle(
  this: ParameterReflection | DeclarationReflection,
) {
  const md = [memberSymbol.call(this)];
  if (this.flags && this.flags.length > 0 && !this.flags.isRest) {
    md.push(' ' + this.flags.map((flag) => `\`${flag}\``).join(' '));
  }
  md.push(`${this.flags.isRest ? '... ' : ''} **${escape(this.name)}**`);
  if (this instanceof DeclarationReflection && this.typeParameters) {
    md.push(
      `<${this.typeParameters
        .map((typeParameter) => `\`${typeParameter.name}\``)
        .join(', ')}\\>`,
    );
  }

  if (!this.parent?.kindOf(ReflectionKind.Enum)) {
    md.push(getType(this));
  }

  if (
    !(this.type instanceof LiteralType) &&
    this.defaultValue &&
    this.defaultValue !== '...'
  ) {
    md.push(` = \`${stripLineBreaks(stripComments(this.defaultValue))}\``);
  }
  return md.join('');
}

function getType(reflection: ParameterReflection | DeclarationReflection) {
  const reflectionType = reflection.type as ReflectionType;
  if (reflectionType && reflectionType.declaration?.children) {
    return ': `Object`';
  }
  return (
    ': ' + type.call(reflectionType ? reflectionType : reflection, 'object')
  );
}
