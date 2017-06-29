import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';

/**
 * Copiles member from the reflection root
 * @param member
 */
export function compileRootMembers(member: DeclarationReflection) {
  let md = '';
  if (member.kind === ReflectionKind.Interface) {
    md = ThemeService.compilePartial('members.interface.hbs', member);
  } else {
    md = ThemeService.compilePartial('members.hbs', member);
  }
  return md;
}
