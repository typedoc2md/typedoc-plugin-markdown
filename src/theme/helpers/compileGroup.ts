import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { compileTemplate } from '../utils';

export function compileGroup(group: ReflectionGroup) {
  let md: hbs.SafeString = '';

  switch (group.title) {
    case 'Properties':
      md = compileTemplate(`partials/members.group.properties.hbs`, group);
      break;
    case 'Methods':
      md = compileTemplate(`partials/members.group.methods.hbs`, group);
      break;
    case 'Functions':
      md = compileTemplate(`partials/members.group.functions.hbs`, group);
      break;
    case 'Variables':
      md = compileTemplate(`partials/members.group.variables.hbs`, group);
      break;
    case 'Enumeration members':
      md = compileTemplate(`partials/members.group.enums.hbs`, group);
      break;

    default:
      md = compileTemplate(`partials/members.group.hbs`, group);

  }
  return md;
}
