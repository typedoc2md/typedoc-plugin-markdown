import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';

export function ifPropertiesGroup(group: ReflectionGroup, opts: any) {
  if ((group.title !== 'Properties')) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
