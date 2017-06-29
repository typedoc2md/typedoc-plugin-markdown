import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';

/**
 * Sets relevant context for member.groups and compiles partial
 * @param group
 * @param parent
 */
export function compileGroup(group: ReflectionGroup, parent: any) {

  const options = ThemeService.getOptions();

  let md = '';

  if (!group.allChildrenArePrivate) {
    let displayTitle = true;
    const isSinglePage = options.mdOutFile !== undefined;
    let displayBackLink = isSinglePage;
    const isMainTitle = options.mode === 0 && parent === undefined;

    if (
      group.kind === ReflectionKind.ObjectLiteral ||
      isSinglePage && group.kind === ReflectionKind.ExternalModule ||
      isSinglePage && group.kind === ReflectionKind.Module ||
      isSinglePage && group.kind === ReflectionKind.Interface ||
      isSinglePage && group.kind === ReflectionKind.Class ||
      isSinglePage && group.kind === ReflectionKind.Enum) {
      displayTitle = false;
      displayBackLink = false;
    }

    md = ThemeService.compilePartial(`members.group.hbs`,
    Object.assign(group, { displayTitle, isMainTitle, displayBackLink }));
  }

  return md;
}
