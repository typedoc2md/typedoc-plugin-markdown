import { ParameterReflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { escape } from './escape';

export function reflectionTitle(this: PageEvent, shouldEscape = true) {
  const title: string[] = [];
  if (this.model.kindString) {
    title.push(`${this.model.kindString}: `);
  }
  title.push(shouldEscape ? escape(this.model.name) : this.model.name);
  if (this.model.typeParameters) {
    const typeParameters = this.model.typeParameters
      .map((typeParameter: ParameterReflection) => typeParameter.name)
      .join(', ');
    title.push(`<${typeParameters}${shouldEscape ? '\\>' : '>'}`);
  }
  return title.join('');
}
