import { PageEvent } from 'typedoc/dist/lib/output/events';
import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';

export function metadata(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }

  const md = `---
  id: ${getId(this)}
  title: ${getTitle(this)}
  sidebar_label: ${getLabel(this)}
  ---\n`;
  return md;
}

function getId(page: PageEvent) {
  const urlSplit = page.url.split('/');
  return urlSplit[urlSplit.length - 1].replace('.md', '');
}

function getLabel(page: PageEvent) {
  if (page.url === MarkdownPlugin.theme.indexName) {
    return MarkdownPlugin.settings.readme === 'none' ? 'Globals' : 'README';
  }
  if (page.url === MarkdownPlugin.theme.globalsName) {
    return 'Globals';
  }
  return getTitle(page);
}

function getTitle(page: PageEvent) {
  if (page.url === MarkdownPlugin.theme.indexName) {
    return page.project.name;
  }
  if (page.url === MarkdownPlugin.theme.globalsName) {
    return 'Globals';
  }
  return MarkdownPlugin.theme.navigationTitlesMap[page.url];
}

function isVisible() {
  if (MarkdownPlugin.theme instanceof DocusaurusTheme) {
    return true;
  }
  return false;
}
