import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { GitbookTheme } from '../theme.gitbook';
import { VuePressTheme } from '../theme.vuepress';
import { relativeUrl } from './relative-url';

export function projectTitle(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }
  return `> **[${this.project.name}](${relativeUrl(MarkdownPlugin.theme.indexName)})**`;
}

function isVisible() {
  if (
    MarkdownPlugin.theme instanceof DocusaurusTheme ||
    MarkdownPlugin.theme instanceof GitbookTheme ||
    MarkdownPlugin.theme instanceof VuePressTheme
  ) {
    return false;
  }
  return true;
}
