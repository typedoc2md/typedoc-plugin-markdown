/**
 *
 * A set of helpers that parses TypeDoc models to be consumed by theme resources.
 *
 * @module
 */

import {
  DeclarationReflection,
  Options,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';

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

export function hasIndex(
  reflection: DeclarationReflection | ProjectReflection,
) {
  return reflection.groups?.some((group) => group.allChildrenHaveOwnDocument());
}

export function hasTOC(reflection: DeclarationReflection, options: Options) {
  if (options.getValue('hideInPageTOC')) {
    return false;
  }
  return reflection.kindOf([ReflectionKind.Module, ReflectionKind.Namespace]);
}

export function getModifier(reflection: DeclarationReflection) {
  if (reflection.flags.isAbstract) {
    return 'Abstract';
  }
  if (reflection.flags.isPrivate) {
    return 'Private';
  }
  if (reflection.flags.isReadonly) {
    return 'Readonly';
  }
  if (reflection.flags.isStatic) {
    return 'Static';
  }
  if (reflection.getSignature) {
    return 'get';
  }
  if (reflection.setSignature) {
    return 'set';
  }
  return null;
}
