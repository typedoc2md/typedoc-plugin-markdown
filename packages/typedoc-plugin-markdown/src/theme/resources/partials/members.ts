import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';

import { MarkdownThemeRenderContext } from '../..';
import { heading, horizontalRule } from '../../../support/elements';
import { isGroupKind } from '../../helpers';

export function members(
  context: MarkdownThemeRenderContext,
  container: ContainerReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const pushCategories = (
    categories: ReflectionCategory[],
    headingLevel: number,
  ) => {
    categories
      ?.filter((category) => !category.allChildrenHaveOwnDocument())
      .forEach((item) => {
        md.push(heading(headingLevel, item.title));
        pushChildren(item.children, headingLevel + 1);
      });
  };

  const pushChildren = (
    children?: DeclarationReflection[],
    memberHeadingLevel?: number,
  ) => {
    const items = children?.filter((item) => !item.hasOwnDocument);
    items?.forEach((item, index) => {
      md.push(context.member(item, memberHeadingLevel || headingLevel));
      if (index < items.length - 1 && isGroupKind(item)) {
        md.push(horizontalRule());
      }
    });
  };

  if (container.categories?.length) {
    pushCategories(container.categories, headingLevel);
  } else {
    if (
      context.options.getValue('excludeGroups') &&
      container.kindOf([
        ReflectionKind.Project,
        ReflectionKind.Module,
        ReflectionKind.Namespace,
      ])
    ) {
      if (container.categories?.length) {
        pushCategories(container.categories, headingLevel);
      } else {
        pushChildren(container.children, headingLevel);
      }
    } else {
      const groupsWithChildren = container.groups?.filter(
        (group) => !group.allChildrenHaveOwnDocument(),
      );
      groupsWithChildren?.forEach((group, index: number) => {
        if (group.categories) {
          md.push(heading(headingLevel, group.title));
          pushCategories(group.categories, headingLevel + 1);
        } else {
          const isPropertiesGroup = group.children.every((child) =>
            child.kindOf(ReflectionKind.Property),
          );

          const isEnumGroup = group.children.every((child) =>
            child.kindOf(ReflectionKind.EnumMember),
          );

          md.push(heading(headingLevel, group.title));

          if (
            isPropertiesGroup &&
            context.options.getValue('propertiesFormat') === 'table'
          ) {
            md.push(context.propertiesTable(group.children));
          } else if (
            isEnumGroup &&
            context.options.getValue('enumMembersFormat') === 'table'
          ) {
            md.push(context.enumMembersTable(group.children));
          } else {
            pushChildren(group.children, headingLevel + 1);
          }
        }

        if (index < groupsWithChildren.length - 1) {
          md.push(horizontalRule());
        }
      });
    }
  }

  return md.join('\n\n');
}
