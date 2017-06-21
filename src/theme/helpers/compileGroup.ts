import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileGroup(group: ReflectionGroup) {

  let md: hbs.SafeString = '';

  if (!group.allChildrenArePrivate) {
    let displayTitle = true;
    if (group.kind === ReflectionKind.ObjectLiteral) {
      displayTitle = false;
    }
    md = compileTemplate(`partials/members.group.hbs`, Object.assign(group, {displayTitle}));
  }

  return md;
}
