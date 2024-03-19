import { heading } from '@plugin/theme/lib/markdown';
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

  if (model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    md.push(this.partials.reflectionIndex(model, 2));
  }

  const isPackages =
    this.page.project.url === this.page.url &&
    this.options.getValue('entryPointStrategy') === EntryPointStrategy.Packages;

  if (isPackages && model.children?.length) {
    md.push(this.partials.packagesIndex(model));
  } else {
    md.push(this.partials.body(model, 2));
  }

  md.push(this.hook('index.page.end').join('\n'));

  return md.join('\n\n');
}
