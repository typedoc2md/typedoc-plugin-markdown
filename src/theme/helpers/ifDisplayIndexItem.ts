import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
import { getOptions } from '../props';

/**
 * Return true if index item should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayIndexItem(item: DeclarationReflection, opts: any) {
  const options = getOptions();
  if (
    (item.children && item.children.length === 0) ||
    (options.excludePrivate && item.flags.isPrivate)
  ) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
