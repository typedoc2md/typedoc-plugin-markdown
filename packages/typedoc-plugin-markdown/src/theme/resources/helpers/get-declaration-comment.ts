import { DeclarationReflection } from 'typedoc';

export function getDeclarationComment(model: DeclarationReflection) {
  if (model.signatures?.length) {
    return model.signatures[0].comment;
  }
  if ((model.type as any)?.declaration?.signatures?.length) {
    return (model.type as any)?.declaration.signatures[0].comment;
  }
  return model.comment;
}
