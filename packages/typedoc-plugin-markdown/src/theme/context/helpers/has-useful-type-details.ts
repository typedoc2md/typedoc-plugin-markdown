import {
  DeclarationReflection,
  ReferenceType,
  Reflection,
  ReflectionKind,
  SomeType,
  TypeVisitor,
} from 'typedoc';

export function hasUsefulTypeDetails(type: SomeType) {
  return type.visit(isUsefulVisitor) ?? false;
}

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
  reference(type) {
    return shouldExpandReference(type);
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
const expanded = new Set<Reflection>();
function shouldExpandReference(reference: ReferenceType) {
  const target = reference.reflection;
  if (reference.highlightedProperties) {
    return !target || expanded.has(target) === false;
  }

  if (!target?.kindOf(ReflectionKind.TypeAlias | ReflectionKind.Interface))
    return false;
  if (!target.comment?.hasModifier('@expand')) return false;

  return expanded.has(target) === false;
}
