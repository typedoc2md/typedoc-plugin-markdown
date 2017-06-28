import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ThemeService } from '../service';

export function ifDisplayIndexItem(item: DeclarationReflection, opts: any) {

  const options = ThemeService.getOptions();

  if ((!item.anchor && !item.groups && item.kind !== ReflectionKind.Interface) ||
    (options.excludePrivate && item.flags.isPrivate)) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
