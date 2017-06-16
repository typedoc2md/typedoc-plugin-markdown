import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { compileTemplate } from '../utils';

export function hierachySymbol(item: any) {
  let symbol = '';

  symbol = item.reflection.extendedTypes ? '↳' : '';

  return symbol;
}
