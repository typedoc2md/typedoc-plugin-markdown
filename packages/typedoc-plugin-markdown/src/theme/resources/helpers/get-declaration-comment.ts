import { DeclarationReflection } from 'typedoc';

export function getDeclarationComment(declaration: DeclarationReflection) {
  if (declaration.signatures?.length) {
    return declaration.signatures[0].comment;
  }
  if ((declaration.type as any)?.declaration?.signatures?.length) {
    return (declaration.type as any)?.declaration.signatures[0].comment;
  }
  return declaration.comment;
}
