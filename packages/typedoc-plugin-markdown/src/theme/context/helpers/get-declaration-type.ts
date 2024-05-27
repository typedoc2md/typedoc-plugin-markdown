import { DeclarationReflection } from 'typedoc';

export function getDeclarationType(model: DeclarationReflection) {
  if (model.signatures) {
    return model.signatures[0].type;
  }
  if (model.getSignature) {
    return model.getSignature.type;
  }
  if (model.setSignature) {
    return model.setSignature.type;
  }
  return model.type;
}
