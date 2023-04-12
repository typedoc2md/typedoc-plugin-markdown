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

export function getIndexHeadingLevel(
  reflection: DeclarationReflection | ProjectReflection,
  groupBySymbols: boolean,
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
  return groupBySymbols ? 4 : 3;
}

export function getGroupHeadingLevel(
  container: ContainerReflection,
  groupBySymbols: boolean,
) {
  if (container.kindOf(ReflectionKind.Project)) {
    return 2;
  }
  return container.hasOwnDocument ? 2 : groupBySymbols ? 4 : 3;
}

export function getReflectionHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
  groupBySymbols: boolean,
) {
  if (reflection.hasOwnDocument) {
    return 1;
  }
  if (reflection?.parent?.kindOf(ReflectionKind.Project)) {
    return 3;
  }
  if (reflection.kindOf(ReflectionKind.Constructor)) {
    return reflection.parent?.hasOwnDocument ? 3 : 4;
  }
  if (groupBySymbols) {
    return reflection.parent?.hasOwnDocument ? 3 : 5;
  }
  return reflection.parent?.hasOwnDocument ? 2 : 4;
}

export function getReflectionTitle(
  reflection: DeclarationReflection,
  fullname = false,
  typeParams = false,
) {
  const md = [
    escapeChars(fullname ? reflection.getFullName() : reflection.name),
  ];
  if (reflection.signatures?.length) {
    md.push('()');
  }
  if (reflection.flags?.isOptional) {
    md.push('?');
  }
  if (typeParams) {
    md.push(getTypeParameters(reflection));
  }
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

export function getPropertyType(property: any) {
  if (property.getSignature) {
    return property.getSignature.type;
  }
  if (property.setSignature) {
    return property.setSignature.type;
  }
  return property.type ? property.type : property;
}
