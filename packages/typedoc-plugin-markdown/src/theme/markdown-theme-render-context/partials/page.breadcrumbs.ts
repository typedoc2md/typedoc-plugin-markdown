import { link } from '@plugin/theme/lib/markdown';
import { escapeChars } from '@plugin/theme/lib/utils';
import * as path from 'path';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders breadcrumbs for a page from the context's `page` property.
 *
 * @category Page Partials
 */
export function breadcrumbs(context: MarkdownThemeRenderContext): string {
  const md: string[] = [];

  const fileExtension = context.options.getValue('fileExtension');
  const entryFileName = `${path.parse(context.options.getValue('entryFileName')).name}${fileExtension}`;

  if (
    context.page.url === context.page.project.url ||
    ((context.page.url === entryFileName ||
      context.page.url === 'readme_.md') &&
      context.page.url.split(path.sep).length === 1)
  ) {
    return '';
  }

  const homeLabel = context.helpers.getProjectName(
    context.helpers.getText('breadcrumbs.home'),
  );

  md.push(link(homeLabel, context.helpers.getRelativeUrl(entryFileName)));

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
      md.push(
        link(
          escapeChars(model.name),
          context.helpers.getRelativeUrl(getUrl(model)),
        ),
      );
    }
  };

  const pageName = escapeChars(context.page.model.name);

  if (
    context.page.model?.parent?.parent &&
    (context.page.url !== context.page.project.url ||
      context.page.url !== entryFileName)
  ) {
    breadcrumb(context.page.model.parent);
  }

  md.push(pageName);

  return md.length > 1 ? `${md.join(' / ')}` : '';
}
