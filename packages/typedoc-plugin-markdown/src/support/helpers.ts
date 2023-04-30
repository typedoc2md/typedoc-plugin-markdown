import {
  CommentTag,
  ContainerReflection,
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';
import { backTicks } from './els';
import { escapeChars, stripLineBreaks } from './utils';

export function getIndexHeadingLevel(
  reflection: DeclarationReflection | ProjectReflection,
  groupByKinds: boolean,
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
  return groupByKinds ? 4 : 3;
}

export function getGroupHeadingLevel(
  container: ContainerReflection,
  groupByKinds: boolean,
) {
  if (container.kindOf(ReflectionKind.Project)) {
    return 2;
  }
  return container.hasOwnDocument ? 2 : groupByKinds ? 4 : 3;
}

export function getReflectionHeadingLevel(
  reflection: DeclarationReflection | SignatureReflection,
  groupByKinds: boolean,
) {
  if (reflection.hasOwnDocument) {
    return 1;
  }
  if (reflection?.parent?.kindOf(ReflectionKind.Project)) {
    return groupByKinds ? 3 : 2;
  }
  if (reflection.kindOf(ReflectionKind.Constructor)) {
    return reflection.parent?.hasOwnDocument ? 3 : 5;
  }
  if (groupByKinds) {
    return reflection.parent?.hasOwnDocument ? 3 : 5;
  }
  return reflection.parent?.hasOwnDocument ? 2 : 4;
}

export function getReflectionTitle(
  reflection: DeclarationReflection,
  typeParams = false,
  longTitle = false,
) {
  const md = [
    escapeChars(longTitle ? reflection.getFriendlyFullName() : reflection.name),
  ];
  if (reflection.signatures?.length) {
    md.push('()');
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

export function tableComments(str: string) {
  return stripLineBreaks(str).replace(/\|/g, '\\|');
}

export function getTagName(tag: CommentTag) {
  return tag.tag.substring(1);
}

export function getDeclarationType(declaration: DeclarationReflection) {
  if (declaration.getSignature) {
    return declaration.getSignature.type;
  }
  if (declaration.setSignature) {
    return declaration.setSignature.type;
  }
  return declaration.type;
}

export function getProjectDisplayName(
  project: ProjectReflection,
  includeVersion: boolean,
): string {
  const version = includeVersion ? ` - v${project.packageVersion}` : '';
  return `${project.name}${version}`;
}
