import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc';
import { MarkdownThemeContext } from '../../theme-context';

import { escapeChars } from '../../utils';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper('breadcrumbs', function (this: PageEvent) {
    const { entryPoints, entryDocument, readme } = context.options;
    const project = context.project();

    if (!project) {
      return '';
    }

    const hasReadmeFile = !readme.endsWith('none');
    const breadcrumbs: string[] = [];
    const globalsName = entryPoints.length > 1 ? 'Modules' : 'Exports';
    breadcrumbs.push(
      this.url === entryDocument
        ? project.name
        : `[${project.name}](${context.relativeURL(entryDocument)})`,
    );
    if (hasReadmeFile) {
      breadcrumbs.push(
        this.url === project.url
          ? globalsName
          : `[${globalsName}](${context.relativeURL('modules.md')})`,
      );
    }
    const breadcrumbsOut = breadcrumb(this, this.model, breadcrumbs);
    return breadcrumbsOut;
  });

  function breadcrumb(page: PageEvent, model: any, md: string[]) {
    if (model && model.parent) {
      breadcrumb(page, model.parent, md);
      if (model.url) {
        md.push(
          page.url === model.url
            ? `${escapeChars(model.name)}`
            : `[${escapeChars(model.name)}](${context.urlTo(model)})`,
        );
      }
    }
    return md.join(' / ');
  }
}
