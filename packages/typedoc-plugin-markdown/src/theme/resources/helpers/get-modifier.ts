import { DeclarationReflection } from 'typedoc';

export function getModifier(reflection: DeclarationReflection) {
  if (reflection.flags.isAbstract) {
    return 'abstract';
  }
  if (reflection.flags.isPrivate) {
    return 'private';
  }
  if (reflection.flags.isReadonly) {
    return 'readonly';
  }
  if (reflection.flags.isStatic) {
    return 'static';
  }
  if (reflection.flags.isProtected) {
    return 'protected';
  }
  if (reflection.flags.isPublic) {
    return 'public';
  }
  if (reflection.getSignature) {
    return 'get';
  }
  if (reflection.setSignature) {
    return 'set';
  }
  return null;
}
