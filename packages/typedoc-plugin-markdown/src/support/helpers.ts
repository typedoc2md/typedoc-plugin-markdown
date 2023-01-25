import {
  ContainerReflection,
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';
import { backTicks } from './els';

/**
 * Determines if current signature is a constructor
 */
export const isConstructor = (
  signature: DeclarationReflection | SignatureReflection,
) => {
  return signature.parent?.kindOf(ReflectionKind.Constructor);
};

export function getIndexHeadingLevel(
  reflection: DeclarationReflection | ProjectReflection,
) {
  if (
    reflection.kindOf([
      ReflectionKind.Project,
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ]) ||
    reflection.hasOwnDocument
  ) {
    return 2;
  }
  return 4;
}

export function getGroupHeadingLevel(container: ContainerReflection) {
  return container.hasOwnDocument ? 2 : 4;
}

export function getReflectionHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
) {
  if (reflection.hasOwnDocument) {
    return 1;
  }
  if (reflection.kindOf(ReflectionKind.Constructor)) {
    return reflection.parent?.hasOwnDocument ? 2 : 4;
  }
  return reflection.parent?.hasOwnDocument ? 3 : 5;
}

export function getMemberHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
) {
  return getReflectionHeadingLevel(reflection) + 1;
}

export function getReflectionTitle(reflection: DeclarationReflection) {
  const md: string[] = [];

  md.push(reflection.name);

  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    md.push(`\\<${typeParameters}\\>`);
  }

  return md.join('');
}

export function getFlags(reflection: DeclarationReflection) {
  if (reflection.flags?.length > 0 && !reflection.flags.isRest) {
    return reflection.flags.map((flag) => backTicks(flag)).join(' ');
  }
  return null;
}
