import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
export function ifGroupContainesVisibleItems(group: ReflectionGroup, opts: any) {

  if (!group.allChildrenArePrivate) {

    return opts.fn(this);
  } else {

    return opts.inverse(this);
  }
}
