/**
 * Functionality to map models to comments.
 *
 * @module
 */
import { Comment, DeclarationReflection, ReflectionKind } from 'typedoc';

export function getComment(model: DeclarationReflection): Comment | undefined {
  if (
    model.kind === ReflectionKind.Function &&
    model.signatures?.length === 1
  ) {
    return model.signatures[0].comment;
  }

  return model.comment;
}
