import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileMember(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (!(Options.excludePrivate && member.flags.isPrivate)) {

    switch (member.kind) {
      case ReflectionKind.Class || ReflectionKind.Module || ReflectionKind.ExternalModule || ReflectionKind.Interface:
        Object.assign(member, { hideBreadcrumbs: true, isSinglePage: Options.markdownSinglePage });
        md = compileTemplate('templates/reflection.hbs', { model: member });
        break;
      case ReflectionKind.Constructor:
        md = compileTemplate('partials/member.constructor.hbs', member);
        break;
      case ReflectionKind.ObjectLiteral:
        md = compileTemplate('partials/member.object.hbs', member);
        break;
      default:
        md = compileTemplate('partials/member.hbs', member);
    }
  }

  return md;
}
