import { DeclarationReflection } from 'typedoc';

export function getModifier(model: DeclarationReflection): string | null {
  if (model.flags.isAbstract) {
    return 'abstract';
  }
  if (model.flags.isPrivate) {
    return 'private';
  }
  if (model.flags.isReadonly) {
    return 'readonly';
  }
  if (model.flags.isStatic) {
    return 'static';
  }
  if (model.flags.isProtected) {
    return 'protected';
  }
  if (model.flags.isPublic) {
    return 'public';
  }
  return null;
}
