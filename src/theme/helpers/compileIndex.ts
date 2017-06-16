import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileIndex(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  md = compileTemplate('partials/index.hbs', Object.assign(member));

  return md;
}
