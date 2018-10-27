import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { getOptions } from '../props';
import { compilePartial } from '../utils';

/**
 * Sets relevant context for member.groups and compiles partial
 * @param group
 * @param parent
 */
export function compileGroup(
  group: ReflectionGroup,
  parentKind: ReflectionKind,
) {
  const options = getOptions();

  let md = '';

  if (!options.excludePrivate || !group.allChildrenArePrivate) {
    md = compilePartial('members.group.hbs', { ...group });
  }

  return md;
}
