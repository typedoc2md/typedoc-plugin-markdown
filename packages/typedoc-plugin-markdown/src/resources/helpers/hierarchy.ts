import { DeclarationHierarchy } from 'typedoc/dist/lib/models';

import { spaces } from './spaces';
import { type } from './type';

export function hierarchy(this: DeclarationHierarchy, level: number) {
  const md = [];

  const space = level > 0 ? level * 2 : 0;
  this.types.forEach((hierarchyType) => {
    if (this.isTarget) {
      md.push(`${spaces(space)}* **${hierarchyType}**`);
    } else {
      md.push(`${spaces(space)}* ${type.call(hierarchyType)}`);
    }
  });
  if (this.next) {
    md.push(hierarchy.call(this.next, level + 1));
  }
  return md.join('\n\n');
}
