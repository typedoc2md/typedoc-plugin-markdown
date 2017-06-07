
import { compileTemplate } from '../utils';

export function compileGroup(group: any, options: any) {

  let md: hbs.SafeString = '';

  switch (group.title) {

    case 'Properties':
      md = compileTemplate(`partials/members.group.properties.hbs`, group);
      break;

    default:
      md = compileTemplate(`partials/members.group.hbs`, group);

  }

  return md;
}
