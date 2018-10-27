import {
  DeclarationReflection,
  ReflectionKind,
} from 'typedoc/dist/lib/models/reflections/index';

import { getMarkdownEngine } from '../utils';

export function getMemberHeadingLevel(member: DeclarationReflection) {
  let headingLevel = getMarkdownEngine() === 'gitbook' ? '##' : '###';
  if (member.parent.kind === ReflectionKind.ObjectLiteral) {
    headingLevel = headingLevel + '#';
  }
  return headingLevel;
}
