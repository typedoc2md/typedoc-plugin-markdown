import {
  ContainerReflection,
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';

/**
 * Determines if current signature is a constructor
 */
export const isConstructor = (
  signature: DeclarationReflection | SignatureReflection,
) => {
  return signature.parent?.kindOf(ReflectionKind.Constructor);
};

/**
 * ie: Functions
 */
export const getSecondaryHeadingLevel = (
  reflection: ProjectReflection | DeclarationReflection | ContainerReflection,
) => {
  return reflection.kindOf(ReflectionKind.Project) || reflection.hasOwnDocument
    ? 2
    : 4;
};

/**
 * ie: Reflection Name
 */
export const getTeritiaryHeadingLevel = (
  reflection: DeclarationReflection | SignatureReflection,
) => {
  if (isConstructor(reflection)) {
    return reflection.parent?.parent?.hasOwnDocument ? 4 : 6;
  }

  return reflection.parent?.hasOwnDocument ? 3 : 5;
};

/**
 * Parameters
 */
export const getQuaternaryHeadingLevel = (
  reflection: DeclarationReflection | SignatureReflection,
) => {
  if (reflection.kindOf(ReflectionKind.SomeSignature)) {
    return reflection.parent?.parent?.hasOwnDocument ? 4 : 6;
  }

  return reflection.parent?.hasOwnDocument ? 4 : 6;
};
