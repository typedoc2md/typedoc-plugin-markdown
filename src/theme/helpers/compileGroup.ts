import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../theme.service';

/**
 * Sets relevant context for member.groups and compiles partial
 * @param group
 * @param parent
 */
export function compileGroup(group: ReflectionGroup, parent: any) {

  const options = ThemeService.getOptions();

  let md = '';

  if (!options.excludePrivate || !group.allChildrenArePrivate) {
    let displayTitle = true;

    const isMainTitle = options.mode === 0 && parent === undefined;

    if (
      group.kind === ReflectionKind.ObjectLiteral) {
      displayTitle = false;
    }

    md = ThemeService.compilePartial(`members.group.hbs`,
      {...group,  displayTitle, isMainTitle});
  }

  return md;
}
