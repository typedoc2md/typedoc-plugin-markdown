import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compileTemplate } from '../utils';

export function compileIndex(member: DeclarationReflection) {

  let md: hbs.SafeString = '';

  if (!Options.markdownSuppressIndexes && (member.kind !== ReflectionKind.Interface)) {
    if (Options.markdownFlavour === 'bitbucket') {
      md = '[TOC]\n';
    } else {
    md = compileTemplate('partials/index.hbs', Object.assign(member));
    }
  }

  return md;
}
