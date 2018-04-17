import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../theme.service';

/**
 * Sets relevant context for member.groups and compiles partial
 * @param group
 * @param parent
 */
export function compileGroup(group: ReflectionGroup, parentKind: ReflectionKind) {

  const options = ThemeService.getOptions();

  let md = '';

  if (!options.excludePrivate || !group.allChildrenArePrivate) {
    md = ThemeService.compilePartial('members.group.hbs', { ...group });
  }

  return md;
}
