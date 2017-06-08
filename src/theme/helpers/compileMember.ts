import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileMember(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (
    member.kindString === 'Object literal' ||
    member.kindString === 'Constructor' ||
    member.kindString === 'Method' ||
    member.kindString === 'Variable' ||
    member.kindString === 'Function' ||
    member.kindString === 'Property' ||
    member.kindString === 'External module') {
    const templateRef = member.kindString.replace(' ', '').toLowerCase().replace(' ', '');
    md = compileTemplate(`partials/member.${templateRef}.hbs`, member);
  } else {
    md = compileTemplate('partials/member.hbs', member);
  }

  return md;
}
