import { heading, link } from '@plugin/theme/lib/markdown';
import { escapeChars } from '@plugin/theme/lib/utils';
import * as path from 'path';
import { MarkdownThemeRenderContext } from 'theme';
import { EntryPointStrategy, ProjectReflection } from 'typedoc';

/**
 * Template that maps to the root project reflection. This will be the index page / documentation root page.
 */
export function project(
  this: MarkdownThemeRenderContext,
  model: ProjectReflection,
) {
  const md: string[] = [];

  md.push(this.hook('index.page.begin').join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  const includeReadme =
    this.options.getValue('mergeReadme') && Boolean(model.readme);

  if (includeReadme && model.readme) {
    md.push(this.partials.commentParts(model.readme));
  }

  if (!this.options.getValue('hidePageTitle') && !includeReadme) {
    md.push(heading(1, this.partials.pageTitle()));
  }

  md.push(this.hook('index.content.begin').join('\n'));

  if (model.comment) {
    md.push(this.partials.comment(model.comment, { headingLevel: 2 }));
  }

  const pageIndex = () => {
    const md: string[] = [];

    const model = this.page.model as ProjectReflection;

    if (model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
      md.push(this.partials.reflectionIndex(model, 2));
      return md.join('\n\n');
    }

    const isPackages =
      this.page.project.url === this.page.url &&
      this.options.getValue('entryPointStrategy') ===
        EntryPointStrategy.Packages;

    if (isPackages && model.children?.length) {
      md.push(heading(2, this.helpers.getText('label.packages')));
      const packagesList = model.children?.map((projectPackage) => {
        const urlTo = Boolean(projectPackage.readme)
          ? `${path.dirname(projectPackage.url || '')}/${this.options.getValue(
              'entryFileName',
            )}`
          : projectPackage.url;
        return urlTo
          ? `- ${link(
              escapeChars(projectPackage.name),
              this.helpers.getRelativeUrl(urlTo),
            )}`
          : '';
      });
      md.push(packagesList?.join('\n') || '');
      return md.join('\n\n');
    }

    return md.join('\n\n');
  };

  md.push(pageIndex());

  md.push(this.partials.body(model, 2));

  md.push(this.hook('index.page.end').join('\n'));

  return md.join('\n\n');
}
