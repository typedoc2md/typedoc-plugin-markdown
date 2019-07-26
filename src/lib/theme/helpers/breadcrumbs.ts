import { Reflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { GitbookTheme } from '../theme.gitbook';
import { VuePressTheme } from '../theme.vuepress';
import { relativeUrl } from './relative-url';

export function breadcrumbs(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }
  const mode = MarkdownPlugin.settings.mode;
  const hasGlobalsFile = MarkdownPlugin.theme.hasGlobalsFile;
  const md =
    mode === undefined || mode === 1 || hasGlobalsFile ? [`[Globals](${relativeUrl(this.project.url)}) /`] : [];
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
    MarkdownPlugin.settings.hideBreadcrumbs ||
    MarkdownPlugin.theme instanceof GitbookTheme ||
    MarkdownPlugin.theme instanceof VuePressTheme
  ) {
    return false;
  }
  return true;
}
