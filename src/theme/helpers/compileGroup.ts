import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compilePartial } from '../utils';

export function compileGroup(group: ReflectionGroup, parent: any) {

  let md = '';

  if (!group.allChildrenArePrivate) {
    let displayTitle = true;
    const isSinglePage = Options.mdOutFile !== undefined;
    let displayBackLink = isSinglePage;
    const isMainTitle = Options.mode === 0 && parent === undefined;

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

    md = compilePartial(`members.group.hbs`,
    Object.assign(group, { displayTitle, isMainTitle, displayBackLink }));
  }

  return md;
}
