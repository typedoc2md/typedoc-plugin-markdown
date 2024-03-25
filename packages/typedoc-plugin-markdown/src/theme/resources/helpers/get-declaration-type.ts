import { DeclarationReflection } from 'typedoc';

export function getDeclarationType(declaration: DeclarationReflection) {
  if (declaration.signatures) {
    return declaration.signatures[0].type;
  }
  if (declaration.getSignature) {
    return declaration.getSignature.type;
  }
  if (declaration.setSignature) {
    return declaration.setSignature.type;
  }
  return declaration.type;
}
