
import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import * as Utils from '../utils';
export function getBackLink(item: DeclarationReflection) {

  let anchor = '';

  const parent = item.parent;

  let label = '';

  if (parent) {

  label = 'Back to ';
  if (parent.kindString) {
    anchor = '#' + parent.anchor;
    label += `${parent.kindString} ${parent.name}`;
  } else {
    anchor = '#index';
    label += 'Index';
  }

  }

  return `↩ [${label}](${anchor})`;

}
