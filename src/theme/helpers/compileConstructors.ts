import * as Handlebars from 'handlebars';
import { compileTemplate } from '../utils';
export function compileConstructors(member: any) {

  let md = '';

  if (member.kindString === 'Class') {

    member.groups.forEach((group: any) => {

    if (group.title === 'Constructors') {
        group.children.forEach((child: any) => {
          md += compileTemplate('partials/member.constructor.hbs', child);
        });

    }
  });

  }

  return new Handlebars.SafeString(md);
}
