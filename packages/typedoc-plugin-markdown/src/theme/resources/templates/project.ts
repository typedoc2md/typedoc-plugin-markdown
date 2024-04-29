import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { EntryPointStrategy, ProjectReflection } from 'typedoc';

/**
 * Template that maps to the root project reflection. This will be the index page / documentation root page.
 */
export function project(this: MarkdownThemeContext) {
  const md: string[] = [];

  const model = this.page.model as ProjectReflection;

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

  md.push(this.hook('content.begin').join('\n'));

  if (model.comment) {
    md.push(this.partials.comment(model.comment, { headingLevel: 2 }));
  }

  if (model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    if (includeReadme) {
      md.push(heading(2, this.getText('label.apiIndex')));
    }
    md.push(
      this.partials.reflectionIndex(model, {
        headingLevel: includeReadme ? 3 : 2,
      }),
    );
  }

  const isPackages =
    this.page.project.url === this.page.url &&
    this.options.getValue('entryPointStrategy') === EntryPointStrategy.Packages;

  if (isPackages && model.children?.length) {
    md.push(this.partials.packagesIndex(model));
  } else {
    md.push(this.partials.body(model, { headingLevel: 2 }));
  }

  md.push(this.partials.footer());

  md.push(this.hook('index.page.end').join('\n'));

  return md.join('\n\n');
}
