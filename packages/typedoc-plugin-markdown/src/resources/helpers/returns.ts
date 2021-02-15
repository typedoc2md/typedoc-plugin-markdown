import { ReflectionType } from 'typedoc/dist/lib/models';

import { propertyTable } from './property-table';
import { type } from './type';

export function returns(this: ReflectionType) {
  const md = [`**Returns:** ${type.call(this, 'all')}`];
  if (
    this instanceof ReflectionType &&
    this.declaration &&
    this.declaration.children
  ) {
    md.push(propertyTable.call(this.declaration.children));
  }
  return md.join('\n\n');
}
