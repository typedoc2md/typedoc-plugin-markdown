import { DeclarationReflection, SomeType, TypeVisitor } from 'typedoc';

export function hasUsefulTypeDetails(type: SomeType) {
  return type.visit(isUsefulVisitor) ?? false;
}

// Adapted from TypeDoc's default theme. TypeDoc also treats `@expand` and
// highlighted-property references as useful because its theme renders their
// members inline; this theme does not, so counting them would leave the type
// with no output at all.
const isUsefulVisitor: Partial<TypeVisitor<boolean>> = {
  array(type) {
    return hasUsefulTypeDetails(type.elementType);
  },
  intersection(type) {
    return type.types.some(hasUsefulTypeDetails);
  },
  union(type) {
    return !!type.elementSummaries || type.types.some(hasUsefulTypeDetails);
  },
  reflection(type) {
    return renderingChildIsUseful(type.declaration);
  },
};

function renderingChildIsUseful(refl: DeclarationReflection) {
  if (renderingThisChildIsUseful(refl)) {
    return true;
  }

  return refl.getProperties().some(renderingThisChildIsUseful);
}

function renderingThisChildIsUseful(refl: DeclarationReflection) {
  if (refl.hasComment()) return true;

  const declaration =
    refl.type?.type === 'reflection' ? refl.type.declaration : refl;
  if (declaration.hasComment()) return true;

  return declaration.getAllSignatures().some((sig) => {
    return sig.hasComment() || sig.parameters?.some((p) => p.hasComment());
  });
}
