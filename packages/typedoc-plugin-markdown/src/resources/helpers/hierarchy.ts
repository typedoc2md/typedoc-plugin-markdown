import { DeclarationHierarchy } from 'typedoc/dist/lib/models';

import { spaces } from './spaces';
import { type } from './type';

export function hierarchy(this: DeclarationHierarchy, level: number) {
  const md: string[] = [];
  const symbol = level > 0 ? getSymbol(level) : '-';
  this.types.forEach((hierarchyType) => {
    if (this.isTarget) {
      md.push(`${symbol} **${hierarchyType}**`);
    } else {
      md.push(`${symbol} ${type.call(hierarchyType)}`);
    }
  });
  if (this.next) {
    md.push(hierarchy.call(this.next, level + 1));
  }
  return md.join('\n\n');
}

function getSymbol(level: number) {
  return spaces(2) + [...Array(level)].map(() => '↳').join('');
}
