import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileGroup(group: ReflectionGroup, isInterface: boolean = false) {

  let md: hbs.SafeString = '';

  if (!group.allChildrenArePrivate) {
    const displayTitle = group.kind === ReflectionKind.ObjectLiteral ? false : true;
    md = compileTemplate(`partials/members.group.hbs`, Object.assign(group, { displayTitle }));
  }

  return md;
}
