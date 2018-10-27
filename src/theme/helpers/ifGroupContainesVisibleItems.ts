import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { getOptions } from '../props';

/**
 * Returns true if group contains visible items
 * @param group
 * @param opts
 */
export function ifGroupContainesVisibleItems(
  group: ReflectionGroup,
  opts: any,
) {
  const options = getOptions();
  if (!options.excludePrivate || !group.allChildrenArePrivate) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
