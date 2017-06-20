import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileMember(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (!(Options.excludePrivate && member.flags.isPrivate)) {

    if (
      member.kindString === 'Object literal' ||
      member.kindString === 'Constructor' ||
      member.kindString === 'Method' ||
      member.kindString === 'Variable' ||
      member.kindString === 'Function' ||
      member.kindString === 'Property'
    ) {
      const templateRef = member.kindString.replace(' ', '').toLowerCase().replace(' ', '');
      md = compileTemplate(`partials/member.${templateRef}.hbs`, member);
    } else if (
      member.kindString === 'Class' ||
      member.kindString === 'Module' ||
      member.kindString === 'External module' ||
      member.kindString === 'Interface') {
      Object.assign(member, { isSinglePage: Options.markdownSinglePage });
      md = compileTemplate('templates/reflection.hbs', { model: member });
    } else {
      md = compileTemplate('partials/member.hbs', member);
    }

  }

  return md;
}
