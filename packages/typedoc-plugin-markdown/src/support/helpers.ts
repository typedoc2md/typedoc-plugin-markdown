import {
  CommentTag,
  ContainerReflection,
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';
import { backTicks } from './els';
import { escapeChars } from './utils';

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
  if (container.kindOf(ReflectionKind.Project)) {
    return 2;
  }
  return container.hasOwnDocument ? 2 : 4;
}

export function getReflectionHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
) {
  if (reflection.hasOwnDocument) {
    return 1;
  }
  if (reflection?.parent?.kindOf(ReflectionKind.Project)) {
    return 3;
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

export function getReflectionTitle(
  reflection: DeclarationReflection,
  fullname = false,
) {
  const md = [
    escapeChars(fullname ? reflection.getFullName() : reflection.name),
  ];
  if (reflection.signatures?.length) {
    md.push('()');
  }
  md.push(getTypeParameters(reflection));
  return md.join('');
}

export function getTypeParameters(reflection: DeclarationReflection) {
  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    return `\\<${typeParameters}\\>`;
  }
  return '';
}

export function getFlags(reflection: DeclarationReflection) {
  if (reflection.flags?.length > 0 && !reflection.flags.isRest) {
    return reflection.flags.map((flag) => backTicks(flag)).join(' ');
  }
  return null;
}

export function getTagName(tag: CommentTag) {
  return tag.tag.substring(1);
}
