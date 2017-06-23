import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
export function ifDisplayTypeHierarchy(item: any, opts: any) {

if (!item.next) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
