import { CommentTag, DeclarationReflection, ProjectReflection } from 'typedoc';
import { backTicks } from './els';
import { stripLineBreaks } from './utils';

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
