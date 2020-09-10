import { ReflectionKind } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

export function reflectionSubtitle(this: PageEvent) {
  if (this.model.kind && this.model.kind !== ReflectionKind.Module) {
    const title = [];
    if (this.model.parent && this.model.parent.parent) {
      if (this.model.parent.parent.parent) {
        title.push(this.model.parent.parent.name);
      }
      title.push(this.model.parent.name);
    }
    title.push(this.model.name);
    return title.length > 1 ? `_${title.join('.')}_` : null;
  }
  return null;
}
