import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';

export function projectTitle(this: PageEvent) {
  return `**[${this.project.name}](${Handlebars.helpers.relativeURL.call(this, MarkdownPlugin.theme.indexName)})**`;
}
