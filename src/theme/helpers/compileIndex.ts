import { DeclarationReflection, ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';

/**
 * Compiles index partial or an empty string if nothing to show
 * @param member
 */
export function compileIndex(member: DeclarationReflection) {
  let md = '';
  if (member.kind !== ReflectionKind.Interface) {
    md = ThemeService.compilePartial('index.hbs', { ...member });
  }
  return md;
}
