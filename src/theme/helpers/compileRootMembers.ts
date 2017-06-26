import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { compilePartial } from '../utils';

export function compileRootMembers(member: DeclarationReflection) {

  let md = '';

  if (member.kind === ReflectionKind.Interface) {
    md = compilePartial('members.interface.hbs', member);
  } else {
    md = compilePartial('members.hbs', member);
  }

  return md;
}
