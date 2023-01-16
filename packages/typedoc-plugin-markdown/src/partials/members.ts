import { ContainerReflection, ReflectionKind } from 'typedoc';
import { heading, horizontalRule } from '../support/els';
import { getGroupHeadingLevel } from '../support/helpers';
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
      .forEach((group) => {
        const headingLevel = getGroupHeadingLevel(container);
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
              if (index !== group.children.length - 1) {
                if (
                  [
                    ReflectionKind.Class,
                    ReflectionKind.Interface,
                    ReflectionKind.Enum,
                    ReflectionKind.Function,
                    ReflectionKind.Variable,
                    ReflectionKind.TypeAlias,
                  ].includes(groupChild.kind)
                ) {
                  md.push(horizontalRule());
                }
              }
            });
        }
      });
  }
  return md.join('\n\n');
}
