import * as path from 'path';
import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';

/**
 * Renders the breadcrumbs
 *
 */
export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];
  const { escapeChars } = context.utils;

  const entryFileName = context.options.getValue('entryFileName');

  if (
    page.url === page.project.url ||
    (page.url === entryFileName && page.url.split(path.sep).length === 1)
  ) {
    return '';
  }

  const homeLabel = context.text
    .get('breadcrumbs.home')
    .replace('{projectName}', page.project.name);

  md.push(context.partials.linkTo(homeLabel, entryFileName));

  const breadcrumb = (model: any) => {
    if (model?.parent?.parent) {
      breadcrumb(model.parent);
    }

    const getUrl = (model: any) => {
      if (Boolean(model.readme)) {
        return `${path.dirname(model.url)}/${entryFileName}`;
      }
      return model.url;
    };
    md.push(context.partials.linkTo(escapeChars(model.name), getUrl(model)));
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
