import { isQuoted, toPascalCase } from '@plugin/libs/utils/index.js';
import { Reflection, ReflectionKind } from 'typedoc';

export function getIdealBaseNameFlattened(reflection: Reflection): string {
  const fullName = reflection.getFullName();

  const fullNameParts = fullName.replace(/\//g, '.').split('.');
  if (reflection.kind !== ReflectionKind.Module) {
    if (
      reflection.kind === ReflectionKind.Document &&
      reflection?.parent?.kind === ReflectionKind.Project
    ) {
      fullNameParts.splice(
        0,
        0,
        toPascalCase(ReflectionKind.singularString(reflection.kind)),
      );
    } else {
      fullNameParts.splice(
        fullNameParts.length - 1,
        0,
        toPascalCase(ReflectionKind.singularString(reflection.kind)),
      );
    }
  }
  return `${fullNameParts.join('.')}`
    .replace(/"/g, '')
    .replace(/ /g, '-')
    .replace(/^\./g, '');
}

export function getReflectionAlias(reflection: Reflection): string {
  let name = reflection.name;

  if (isQuoted(reflection.name)) {
    name = name.replace(/\//g, '_');
  }

  return name
    .replace(/"/g, '')
    .replace(/^_+|_+$/g, '')
    .replace(/[<>]/g, '-');
}
