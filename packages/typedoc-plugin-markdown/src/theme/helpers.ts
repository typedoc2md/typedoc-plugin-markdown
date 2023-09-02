/**
 *
 * A set of helpers that parses TypeDoc models to be consumed by theme resources.
 *
 * @module
 */

import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { backTicks } from '../support/elements';
import { escapeChars } from '../support/utils';

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
  const version =
    includeVersion && project.packageVersion
      ? ` - v${project.packageVersion}`
      : '';
  return `${project.name}${version ? version : ''}`;
}

export function hasIndex(
  reflection: DeclarationReflection | ProjectReflection,
) {
  return reflection.groups?.some((group) => group.allChildrenHaveOwnDocument());
}

export function hasTOC(reflection: DeclarationReflection | ProjectReflection) {
  return (
    reflection.kindOf([
      ReflectionKind.Project,
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ]) &&
    reflection.groups?.some((group) => !group.allChildrenHaveOwnDocument())
  );
}

export function isGroupKind(reflection: DeclarationReflection) {
  return reflection.kindOf([
    ReflectionKind.Class,
    ReflectionKind.Interface,
    ReflectionKind.Enum,
    ReflectionKind.Function,
    ReflectionKind.Variable,
    ReflectionKind.TypeAlias,
  ]);
}

export function getModifier(reflection: DeclarationReflection) {
  if (reflection.flags.isAbstract) {
    return 'abstract';
  }
  if (reflection.flags.isPrivate) {
    return 'private';
  }
  if (reflection.flags.isReadonly) {
    return 'readonly';
  }
  if (reflection.flags.isStatic) {
    return 'static';
  }
  if (reflection.getSignature) {
    return 'get';
  }
  if (reflection.setSignature) {
    return 'set';
  }
  return null;
}

export const KEYWORD_MAP = {
  [ReflectionKind.Class]: 'class',
  [ReflectionKind.Interface]: 'interface',
  [ReflectionKind.Enum]: 'enum',
  [ReflectionKind.TypeAlias]: 'type',
};

export function getMemberTitle(reflection: DeclarationReflection) {
  const md: string[] = [];

  const name: string[] = [];

  const flagsToInclude = ['Abstract'];

  const flags = reflection.flags.filter((flag) =>
    flagsToInclude.includes(flag),
  );

  if (flags.length) {
    name.push(flags.map((flag) => backTicks(flag.toLowerCase())).join(' '));
    name.push(' ');
  }

  name.push(`${escapeChars(reflection.name)}`);

  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    name.push(`${backTicks(`<${typeParameters}>`)}`);
  }

  md.push(name.join(''));

  return md.join(': ');
}
