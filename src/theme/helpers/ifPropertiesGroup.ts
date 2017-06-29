import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';

/**
 * Returns true if properties group
 * @param group
 * @param opts
 */
export function ifPropertiesGroup(group: ReflectionGroup, opts: any) {
  if ((group.title === 'Properties')) {
   return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
