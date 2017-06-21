import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { compileTemplate } from '../utils';

export function compileGroup(group: ReflectionGroup) {
  let md: hbs.SafeString = '';

  if (!group.allChildrenArePrivate) {
    md = compileTemplate(`partials/members.group.hbs`, group);
  }

  return md;
}
