/**
 * Returns the hierarchy symbol
 * @param item
 */
export function getHierachySymbol(item: any) {
  let symbol = '';
  if (item.reflection) {
    symbol = item.reflection.extendedTypes ? '↳ ' : '';
  }
  return symbol;
}
