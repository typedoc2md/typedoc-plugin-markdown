import * as path from 'path';
import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { link } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

/**
 * Renders the breadcrumbs
 * @mergeTarget
 */
export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const md: string[] = [];

  if (
    page.url === page.project.url ||
    (page.url === context.options.getValue('entryFileName') &&
      page.url.split(path.sep).length === 1)
  ) {
    return '';
  }

  //const homeLabel = getIndexLabel(page.project);
  const homeLabel = 'API Index';

  md.push(link(homeLabel, context.relativeURL(page.project.url)));

  const breadcrumb = (model: any) => {
    if (model?.parent?.parent) {
      breadcrumb(model.parent);
    }
    md.push(link(escapeChars(model.name), context.relativeURL(model?.url)));
  };

  const pageName = escapeChars(page.model.name);

  if (
    page.model?.parent?.parent &&
    (page.url !== page.project.url ||
      page.url !== context.options.getValue('entryFileName'))
  ) {
    breadcrumb(page.model.parent);
  }

  md.push(pageName);

  return md.length > 1 ? `${md.join(' / ')}` : '';
}
