import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';
import { compilePartial } from '../utils';

export function compileIndex(member: DeclarationReflection) {

  const options = ThemeService.getOptions();

  let md = '';

  if (member.kind !== ReflectionKind.Interface) {

    if (!options.mdOutFile || (options.mdOutFile && !options.mdHideIndexes)) {
      md = compilePartial('index.hbs', Object.assign(member));
    }
  }

  return md;
}
