import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
/**
 * Returns true if group contains visible items
 * @param group
 * @param opts
 */
export function ifGroupContainesVisibleItems(group: ReflectionGroup, opts: any) {
  if (!group.allChildrenArePrivate) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
