import { DeclarationReflection } from 'typedoc';

export function getCommentForReflection(model: DeclarationReflection) {
  return model.signatures?.length
    ? model.signatures[0].comment || model.comment
    : model.comment;
}
