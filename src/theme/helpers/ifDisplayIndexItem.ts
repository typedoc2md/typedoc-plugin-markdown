import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
import { Options } from '../options';

export function ifDisplayIndexItem(item: DeclarationReflection, opts: any) {

if ((Options.excludePrivate && item.flags.isPrivate)) {
  return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
