import { DeclarationReflection, ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

export function getMemberHeadingLevel(member: DeclarationReflection) {
  const options = ThemeService.getOptions();
  let headingLevel = options.mdFlavour === Flavour.GITBOOK ? '##' : '###';
  if (member.parent.kind === ReflectionKind.ObjectLiteral) {
    headingLevel = headingLevel + '#';
  }
  return headingLevel;
}
