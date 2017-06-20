
import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import * as Utils from '../utils';

export function getTypeLink(item: DeclarationReflection, url: any) {

  let link = '';

  if (item.url) {
    link = '../' + item.url;
  } else {
    link = '#' + item.anchor;
  }

  return link;

}
