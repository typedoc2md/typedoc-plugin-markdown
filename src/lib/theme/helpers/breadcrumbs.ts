import { Reflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { DocusaurusTheme } from '../theme.docusaurus';
import { GitbookTheme } from '../theme.gitbook';
import { relativeUrl } from './relative-url';
import { VuePressTheme } from '../theme.vuepress';

export function breadcrumbs(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }
  const md = MarkdownPlugin.theme.hasGlobalsFile ? [`[Globals](${relativeUrl(this.project.url)}) /`] : [];
  return breadcrumb(this.model, md);
}

function breadcrumb(model: Reflection, md: string[]) {
  if (model && model.parent) {
    breadcrumb(model.parent, md);
    if (model.url) {
      md.push(`[${model.name}](${relativeUrl(model.url)}) /`);
    }
  }
  return md.join(' ');
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
