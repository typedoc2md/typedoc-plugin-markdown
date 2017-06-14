import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileIndex(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (member.kindString === 'Class') {
    member.groups.map((el) => {

      return el.title === 'Constructors' ? Object.assign(el, {isConstructors: true}) : el;
    });

  }

  md = compileTemplate('partials/index.hbs', Object.assign(member));
 
  return md;
}
