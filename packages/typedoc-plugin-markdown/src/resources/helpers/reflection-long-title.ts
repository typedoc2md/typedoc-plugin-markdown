import { ReflectionKind } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

export function reflectionLongTitle(this: PageEvent) {
  const paths = [];

  const addPath = (model: any) => {
    if (model.parent && model.parent.parent) {
      addPath(model.parent);
      paths.push(model.parent.name.replace(/\"/g, ''));
    }
  };

  if (this.model && this.model.kind !== ReflectionKind.Module) {
    addPath(this.model);
  }

  return paths.length > 0 ? ` >${paths.join('.')}.${this.model.name}` : null;
}
