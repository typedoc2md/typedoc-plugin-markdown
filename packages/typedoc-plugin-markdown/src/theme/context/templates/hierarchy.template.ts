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
  const seen = new Set<DeclarationReflection>();
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

  hierarchyRoots.forEach((root) => {
    md.push(heading(3, root.name));
    md.push(fullHierarchy(this, root, seen));
    md.push(horizontalRule());
  });

  md.push(
    hierarchyRoots.map((root) => fullHierarchy(this, root, seen)).join('\n'),
  );

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
  if (seen.has(root)) {
    return '';
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

  const res: string[] = [
    `${[...Array(level)].map(() => '  ').join('')}- ${link(root.name, context.urlTo(root))}`,
  ];

  if (children.length) {
    res.push(children.join('\n'));
  }

  return res.join('\n');
}
