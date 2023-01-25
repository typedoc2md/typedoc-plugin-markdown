import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionGroup,
} from 'typedoc';
import { heading } from '../support/els';
import { getIndexHeadingLevel } from '../support/helpers';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function toc(
  context: MarkdownThemeRenderContext,
  reflection: ProjectReflection | DeclarationReflection,
) {
  const md: string[] = [];

  const hideInPageTOC = context.getOption('hideInPageTOC');

  const isVisible = reflection.groups?.some((group) =>
    group.allChildrenHaveOwnDocument(),
  );

  function pushGroup(group: ReflectionGroup, md: string[]) {
    const children = group.children.map(
      (child) =>
        `- [${escapeChars(child.name)}](${context.relativeURL(child.url)})`,
    );
    md.push(children.join('\n'));
  }

  if (
    (!hideInPageTOC && reflection.groups) ||
    (isVisible && reflection.groups)
  ) {
    const headingLevel = getIndexHeadingLevel(reflection);
    const subHeadingLevel = headingLevel + 1;

    md.push(heading(headingLevel, 'Index') + '\n\n');

    reflection.groups?.forEach((group) => {
      const groupTitle = group.title;
      if (group.categories) {
        group.categories.forEach((category) => {
          md.push(
            heading(subHeadingLevel, `${category.title} ${groupTitle}`) +
              '\n\n',
          );
          pushGroup(category as any, md);
          md.push('\n');
        });
      } else {
        if (!hideInPageTOC || group.allChildrenHaveOwnDocument()) {
          md.push(heading(subHeadingLevel, groupTitle) + '\n\n');
          pushGroup(group, md);
          md.push('\n');
        }
      }
    });
  }
  return md.length > 0 ? md.join('\n') : '';
}
