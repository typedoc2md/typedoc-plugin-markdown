import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
export function ifDisplayIndexItem(item: DeclarationReflection, opts: any) {
  if (!item.hasOwnDocument || (item.hasOwnDocument && item.children)) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
