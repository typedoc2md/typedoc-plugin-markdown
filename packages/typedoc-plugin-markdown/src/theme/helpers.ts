/**
 *
 * A set of helpers that parses TypeDoc models to be consumed by theme resources.
 *
 * @module
 */

import { DeclarationReflection, ProjectReflection } from 'typedoc';

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
