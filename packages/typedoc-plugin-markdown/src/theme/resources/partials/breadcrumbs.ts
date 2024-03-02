import * as path from 'path';
import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';
import { escapeChars } from '../utils';

export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const md: string[] = [];

  const fileExtension = context.options.getValue('fileExtension');
  const entryFileName = `${path.parse(context.options.getValue('entryFileName')).name}${fileExtension}`;

  if (
    page.url === page.project.url ||
    ((page.url === entryFileName || page.url === 'readme_.md') &&
      page.url.split(path.sep).length === 1)
  ) {
    return '';
  }

  const homeLabel = context.helpers.getIndexTitle(
    context.text.getText('breadcrumbs.home'),
    page.project.name,
    page.project.packageVersion,
  );

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
    if (model.name !== context.options.getValue('entryModule')) {
      md.push(context.partials.linkTo(escapeChars(model.name), getUrl(model)));
    }
  };

  const pageName = escapeChars(page.model.name);

  if (
    page.model?.parent?.parent &&
    (page.url !== page.project.url || page.url !== entryFileName)
  ) {
    breadcrumb(page.model.parent);
  }

  md.push(pageName);

  return md.length > 1 ? `${md.join(' / ')}` : '';
}
