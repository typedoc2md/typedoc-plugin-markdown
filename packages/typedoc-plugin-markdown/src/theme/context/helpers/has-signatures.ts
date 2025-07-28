import { DeclarationReflection, ReflectionType } from 'typedoc';

export function hasSignatures(model: DeclarationReflection): boolean {
  return (
    !(model.type as ReflectionType)?.declaration?.children?.length &&
    (Boolean(model.signatures?.length) ||
      Boolean((model.type as ReflectionType)?.declaration?.signatures?.length))
  );
}
