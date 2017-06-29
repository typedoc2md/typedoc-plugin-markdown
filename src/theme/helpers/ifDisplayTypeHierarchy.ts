/**
 * Returns true if type hierarchy should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayTypeHierarchy(item: any, opts: any) {
  if (!item.next) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
