import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { compileTemplate } from '../utils';

export function compileRootMembers(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (member.kind === ReflectionKind.Interface) {
    md = compileTemplate('partials/members.interface.hbs', member);
  } else {
    md = compileTemplate('partials/members.hbs', member);
  }

  return md;
}
