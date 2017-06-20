
export function hierachySymbol(item: any) {
  let symbol = '';
  if (item.reflection) {
    symbol = item.reflection.extendedTypes ? '↳ ' : '';
  }
  return symbol;
}
