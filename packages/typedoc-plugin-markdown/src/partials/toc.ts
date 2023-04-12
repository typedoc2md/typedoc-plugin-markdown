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

  function pushGroup(group: ReflectionGroup) {
    const children = group.children.map(
      (child) =>
        `- [${escapeChars(child.name)}](${context.relativeURL(child.url)})`,
    );
    return children.join('\n');
  }

  if (
    (!hideInPageTOC && reflection.groups) ||
    (isVisible && reflection.groups)
  ) {
    const headingLevel = getIndexHeadingLevel(
      reflection,
      context.getOption('groupBySymbols'),
    );
    const subHeadingLevel = headingLevel + 1;

    md.push(heading(headingLevel, 'Index') + '\n\n');

    if (reflection.categories?.length) {
      reflection.categories.forEach((item) => {
        md.push(heading(subHeadingLevel, item.title));
        md.push(pushGroup(item));
      });
    } else if (reflection.groups?.length) {
      reflection.groups.forEach((item) => {
        if (item.categories) {
          md.push(heading(subHeadingLevel, item.title));
          item.categories.forEach((item2) => {
            md.push(heading(subHeadingLevel + 1, `${item2.title}`));
            md.push(pushGroup(item2));
          });
        } else {
          if (!hideInPageTOC || item.allChildrenHaveOwnDocument()) {
            md.push(heading(subHeadingLevel, item.title) + '\n\n');
            md.push(pushGroup(item));
            md.push('\n');
          }
        }
      });
    }
  }
  return md.length > 0 ? md.join('\n') : '';
}
