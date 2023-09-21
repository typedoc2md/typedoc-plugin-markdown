import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { heading } from '../../../support/elements';
import { hasTOC } from '../../helpers';

/**
 * @category Templates
 */
export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.breadcrumbs(page));
  }

  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(1, context.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.comment(page.model.comment, 2));
  }

  md.push(context.pageIndex(page, 2));

  if (!context.options.getValue('hideInPageTOC') && hasTOC(page.model)) {
    md.push(context.reflectionIndex(page.model, true, 2));
  }

  md.push(context.members(page.model, 2));

  md.push(context.footer());

  return md.join('\n\n');
}
