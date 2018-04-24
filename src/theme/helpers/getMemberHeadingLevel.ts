import { DeclarationReflection, ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

export function getMemberHeadingLevel(member: DeclarationReflection) {
  let headingLevel = ThemeService.getMarkdownEngine() === MarkdownEngine.GITBOOK ? '##' : '###';
  if (member.parent.kind === ReflectionKind.ObjectLiteral) {
    headingLevel = headingLevel + '#';
  }
  return headingLevel;
}
