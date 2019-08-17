import { ProjectReflection, Reflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { MarkdownPlugin } from '../../plugin';
import { GitbookTheme } from '../theme.gitbook';
import { VuePressTheme } from '../theme.vuepress';
import { relativeUrl } from './relative-url';

export function breadcrumbs(this: PageEvent) {
  if (!isVisible()) {
    return '';
  }
  return breadcrumb(this.model, this.project, []);
}

function breadcrumb(model: Reflection, project: ProjectReflection, md: string[]) {
  if (model && model.parent) {
    breadcrumb(model.parent, project, md);
    if (model.url) {
      md.push(`[${model.name}](${relativeUrl(model.url)})`);
    } else {
      md.push(model.url);
    }
  } else {
    md.push(`[Globals](${relativeUrl(project.url)})`);
  }
  return md.join(' › ');
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
