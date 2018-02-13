import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ThemeService } from '../service';

/**
 * Returns true if group contains visible items
 * @param group
 * @param opts
 */
export function ifGroupContainesVisibleItems(group: ReflectionGroup, opts: any) {
  const options = ThemeService.getOptions();
  if (!options.excludePrivate || !group.allChildrenArePrivate) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
