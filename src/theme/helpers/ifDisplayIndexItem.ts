import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { Options } from '../options';

export function ifDisplayIndexItem(item: DeclarationReflection, opts: any) {

  if ((!item.anchor && !item.groups && item.kind !== ReflectionKind.Interface) ||
    (Options.excludePrivate && item.flags.isPrivate)) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
