import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileMember(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (!(Options.excludePrivate && member.flags.isPrivate)) {
    if (member.kind === ReflectionKind.Constructor) {
      md = compileTemplate('partials/member.constructor.hbs', member);
    } else if (
      member.kind === ReflectionKind.Class ||
      member.kind === ReflectionKind.Module ||
      member.kind === ReflectionKind.ExternalModule ||
      member.kind === ReflectionKind.Interface) {
      Object.assign(member, { hideBreadcrumbs: true, isSinglePage: Options.markdownSinglePage });
      md = compileTemplate('templates/reflection.hbs', { model: member });
    } else {
      md = compileTemplate('partials/member.hbs', member);
    }
  }

  return md;
}
