import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';
import { compilePartial } from '../utils';

export function compileIndex(member: DeclarationReflection) {

  let md = '';

  if (member.kind !== ReflectionKind.Interface) {

    if (!Options.mdOutFile || (Options.mdOutFile && !Options.mdHideIndexes)) {
      md = compilePartial('index.hbs', Object.assign(member));
    }
  }

  return md;
}
