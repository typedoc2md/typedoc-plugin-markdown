import { compileTemplate } from '../utils';

export function compileRootMembers(member: any) {

  let md: hbs.SafeString = '';

  if (member.kindString === 'Interface') {
    md = compileTemplate('partials/members.interface.hbs', member);
  } else {
  md = compileTemplate('partials/members.hbs', member);
  }

  return md;
}
