import { DeclarationReflection } from 'typedoc';

export function getDeclarationComment(model: DeclarationReflection) {
  if (model.signatures?.length) {
    return model.signatures[0].comment;
  }
  return model.comment;
}
