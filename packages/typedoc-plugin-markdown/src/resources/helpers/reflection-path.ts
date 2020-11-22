import { ReflectionKind } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { relativeURL } from './relative-url';

export function reflectionPath(this: PageEvent) {
  if (this.model) {
    if (this.model.kind && this.model.kind !== ReflectionKind.Module) {
      const title: string[] = [];
      if (this.model.parent && this.model.parent.parent) {
        if (this.model.parent.parent.parent) {
          title.push(
            `[${this.model.parent.parent.name}](${relativeURL(
              this.model.parent.parent.url,
            )})`,
          );
        }
        title.push(
          `[${this.model.parent.name}](${relativeURL(this.model.parent.url)})`,
        );
      }
      title.push(this.model.name);
      return title.length > 1 ? `${title.join('.')}` : null;
    }
  }
  return null;
}
