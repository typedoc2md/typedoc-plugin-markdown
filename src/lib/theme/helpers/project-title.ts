import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { GitbookTheme } from '../theme.gitbook';
import { VuePressTheme } from '../theme.vuepress';

export function projectTitle(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }
  return `**[${this.project.name}](${Handlebars.helpers.relativeURL.call(this, MarkdownPlugin.theme.indexName)})**`;
}

function isVisible() {
  if (
    MarkdownPlugin.settings.hideProjectTitle ||
    MarkdownPlugin.theme instanceof DocusaurusTheme ||
    MarkdownPlugin.theme instanceof GitbookTheme ||
    MarkdownPlugin.theme instanceof VuePressTheme
  ) {
    return false;
  }
  return true;
}
