import { ParameterReflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';
import { escape } from './escape';

export function reflectionTitle(this: PageEvent, shouldEscape = true) {
  const title: string[] = [''];

  if (this.model && this.model.kindString && this.url !== this.project.url) {
    title.push(`${this.model.kindString}: `);
  }
  if (this.url === this.project.url) {
    title.push(
      MarkdownTheme.HANDLEBARS.helpers.indexTitle() || this.project.name,
    );
  } else {
    title.push(shouldEscape ? escape(this.model.name) : this.model.name);
    if (this.model.typeParameters) {
      const typeParameters = this.model.typeParameters
        .map((typeParameter: ParameterReflection) => typeParameter.name)
        .join(', ');
      title.push(`<${typeParameters}${shouldEscape ? '\\>' : '>'}`);
    }
  }
  return title.join('');
}
