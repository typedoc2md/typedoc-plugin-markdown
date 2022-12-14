import { ContainerReflection } from 'typedoc';
import { heading } from '../support/els';
import { getSecondaryHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function members(
  context: MarkdownThemeRenderContext,
  container: ContainerReflection,
) {
  const md: string[] = [];
  if (container.categories && container.categories.length) {
    container.categories
      .filter((category) => !category.allChildrenHaveOwnDocument())
      .forEach((item) =>
        item.children
          .filter((item) => !item.hasOwnDocument)
          .forEach((item) => {
            md.push(context.partials.member(item));
          }),
      );
  } else {
    container.groups
      ?.filter((group) => !group.allChildrenHaveOwnDocument())
      .forEach((group, groupIndex) => {
        const headingLevel = getSecondaryHeadingLevel(container);
        if (group.categories) {
          group.categories.forEach((groupItem) =>
            groupItem.children.forEach((item) => {
              md.push(context.partials.member(item));
            }),
          );
        } else {
          md.push(heading(headingLevel, group.title));
          group.children
            .filter((item) => !item.hasOwnDocument)
            .forEach((groupChild, index) => {
              md.push(context.partials.member(groupChild));
            });
        }
      });
  }
  return md.join('\n\n');
}
