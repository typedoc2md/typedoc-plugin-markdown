import { DeclarationReflection, ReferenceType } from 'typedoc/dist/lib/models';

export function hierachyLevel(this: ReferenceType) {
  const reflection = this.reflection as DeclarationReflection;
  const level = reflection && reflection.extendedTypes ? ` *` : '*';
  return level;
}
