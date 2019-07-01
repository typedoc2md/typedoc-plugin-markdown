import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { GitbookTheme } from '../theme.gitbook';
import { heading } from './heading';
import { reflectionTitle } from './reflection-title';

export function mainTitle(this: PageEvent) {
  if (!isVisible(this)) {
    return '';
  }
  return `${prefix()} ${reflectionTitle.call(this)}`;
}

function isVisible(page: PageEvent) {
  if (MarkdownPlugin.theme instanceof DocusaurusTheme || page.url === MarkdownPlugin.theme.indexName) {
    return false;
  }
  return true;
}

function prefix() {
  if (MarkdownPlugin.theme instanceof GitbookTheme) {
    return `> ${heading(1)}`;
  }
  return heading(1);
}
