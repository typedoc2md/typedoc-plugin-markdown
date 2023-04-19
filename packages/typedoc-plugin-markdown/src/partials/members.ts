import { ContainerReflection, ReflectionKind } from 'typedoc';
import { SYMBOLS_WITH_DOCUMENTS } from '../support/constants';
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
        const headingLevel = getGroupHeadingLevel(
          container,
          context.getOption('groupByKinds'),
        );
        if (group.categories) {
          if (
            context.getOption('groupByKinds') ||
            SYMBOLS_WITH_DOCUMENTS.includes(container.kind)
          ) {
            md.push(heading(headingLevel, group.title));
          }
          group.categories.forEach((groupItem) =>
            groupItem.children.forEach((item) => {
              md.push(context.partials.member(item));
            }),
          );
        } else {
          if (
            context.getOption('groupByKinds') ||
            SYMBOLS_WITH_DOCUMENTS.includes(container.kind)
          ) {
            md.push(heading(headingLevel, group.title));
          }

          const isPropertiesGroup = group.children.every((child) =>
            child.kindOf(ReflectionKind.Property),
          );

          const isEnumGroup = group.children.every((child) =>
            child.kindOf(ReflectionKind.EnumMember),
          );

          if (
            isPropertiesGroup &&
            context.getOption('propertiesFormat').toLowerCase() === 'table'
          ) {
            md.push(context.partials.propertiesTable(group.children));
          } else if (
            isEnumGroup &&
            context.getOption('enumMembersFormat').toLowerCase() === 'table'
          ) {
            md.push(context.partials.enumMembersTable(group.children));
          } else {
            group.children
              .filter((item) => !item.hasOwnDocument)
              .forEach((groupChild) => {
                md.push(context.partials.member(groupChild));
                if (SYMBOLS_WITH_DOCUMENTS.includes(groupChild.kind)) {
                  md.push(horizontalRule());
                }
              });
          }
        }
      });
  }
  return md.join('\n\n');
}
