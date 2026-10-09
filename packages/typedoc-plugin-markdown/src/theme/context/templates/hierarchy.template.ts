import { MarkdownPageEvent } from '@plugin/events/index.js';
import { heading, horizontalRule, link } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { getHierarchyRoots } from '@plugin/theme/lib/index.js';
import { DeclarationReflection, i18n, ProjectReflection } from 'typedoc';

export function hierarchy(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];
  md.push(this.hook('page.begin', this).join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  if (!this.options.getValue('hidePageTitle')) {
    md.push(heading(1, this.partials.pageTitle()));
  }

  md.push(this.hook('content.begin', this).join('\n'));

  const hierarchyRoots = getHierarchyRoots(page.project);

  md.push(heading(2, i18n.theme_hierarchy_summary()));

  // Each root lists its whole tree, so a class that extends or implements
  // more than one root appears under each of them.
  hierarchyRoots.forEach((root) => {
    md.push(heading(3, root.name));
    md.push(fullHierarchy(this, root, new Set()));
    md.push(horizontalRule());
  });

  md.push(this.hook('content.end', this).join('\n'));

  md.push(this.partials.footer());

  md.push(this.hook('page.end', this).join('\n'));

  return md.join('\n\n');
}

function fullHierarchy(
  context: MarkdownThemeContext,
  root: DeclarationReflection,
  seen: Set<DeclarationReflection>,
  level = 0,
) {
  const line = `${'  '.repeat(level)}- ${link(root.name, context.router.getFullUrl(root))}`;

  // Already listed in this tree (a diamond): link it again, but do not repeat
  // its subtree.
  if (seen.has(root)) {
    return line;
  }

  seen.add(root);

  const children: string[] = [];
  for (const child of [
    ...(root.implementedBy || []),
    ...(root.extendedBy || []),
  ]) {
    if (child.reflection) {
      children.push(
        fullHierarchy(
          context,
          child.reflection as DeclarationReflection,
          seen,
          level + 1,
        ),
      );
    }
  }

  const res: string[] = [line];

  if (children.length) {
    res.push(children.join('\n'));
  }

  return res.join('\n');
}
