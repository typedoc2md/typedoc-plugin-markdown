import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { GitbookTheme } from '../theme.gitbook';
import { heading } from './heading';
import { relativeUrl } from './relative-url';

export function projectTitle(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }
  return `> ${heading(2)} [${this.project.name}](${relativeUrl(MarkdownPlugin.theme.indexName)})`;
}

function isVisible() {
  if (MarkdownPlugin.theme instanceof DocusaurusTheme || MarkdownPlugin.theme instanceof GitbookTheme) {
    return false;
  }
  return true;
}
