import { DeclarationReflection } from 'typedoc';

export function getModifier(model: DeclarationReflection): string | null {
  const modifiers: string[] = [];
  if (model.flags.isPrivate) {
    modifiers.push('private');
  } else if (model.flags.isProtected) {
    modifiers.push('protected');
  } else if (model.flags.isPublic) {
    modifiers.push('public');
  }
  if (model.flags.isStatic) {
    modifiers.push('static');
  }
  if (model.flags.isAbstract) {
    modifiers.push('abstract');
  }
  if (model.flags.isReadonly) {
    modifiers.push('readonly');
  }
  return modifiers.length ? modifiers.join(' ') : null;
}
