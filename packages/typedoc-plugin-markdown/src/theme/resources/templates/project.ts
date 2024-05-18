import { MarkdownPageEvent } from '@plugin/app/events';
import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { EntryPointStrategy, ProjectReflection } from 'typedoc';

/**
 * Template that maps to the root project reflection. This will be the index page / documentation root page.
 */
export function project(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<ProjectReflection>,
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
    this.options.getValue('mergeReadme') && Boolean(page.model.readme);

  if (includeReadme && page.model.readme) {
    md.push(this.partials.commentParts(page.model.readme));
  }

  if (!this.options.getValue('hidePageTitle') && !includeReadme) {
    md.push(heading(1, this.partials.pageTitle()));
  }

  md.push(this.hook('content.begin').join('\n'));

  if (page.model.comment) {
    md.push(this.partials.comment(page.model.comment, { headingLevel: 2 }));
  }

  if (page.model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    if (includeReadme) {
      md.push(heading(2, this.i18n.theme_api_index()));
    }
    md.push(
      this.partials.documents(page.model, {
        headingLevel: includeReadme ? 3 : 2,
      }),
    );
    md.push(
      this.partials.reflectionIndex(page.model, {
        headingLevel: includeReadme ? 3 : 2,
      }),
    );
  }

  const isPackages =
    this.page.project.url === this.page.url &&
    this.options.getValue('entryPointStrategy') === EntryPointStrategy.Packages;

  if (isPackages && page.model.children?.length) {
    md.push(this.partials.packagesIndex(page.model));
  } else {
    md.push(this.partials.body(page.model, { headingLevel: 2 }));
  }

  md.push(this.partials.footer());

  md.push(this.hook('index.page.end').join('\n'));

  return md.join('\n\n');
}
