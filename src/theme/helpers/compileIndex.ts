import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileIndex(member: DeclarationReflection) {

  let md: hbs.SafeString = '';
  let urlPrefix = '../';

  if (!member.kindString) {
    urlPrefix = '';
  }

  if (member.kindString !== 'Interface' && member.kindString !== 'Class') {
    md = compileTemplate('partials/index.hbs', Object.assign(member, { urlPrefix }));
  }
  return md;
}
