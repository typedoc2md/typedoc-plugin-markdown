import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';

import { MarkdownThemeRenderContext } from '../..';
import { heading, horizontalRule } from '../markdown';

export function members(
  context: MarkdownThemeRenderContext,
  container: ContainerReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const displayHr = (reflection: DeclarationReflection) => {
    if (context.options.getValue('outputFileStrategy') === 'modules') {
      return context.helpers.isGroupKind(reflection);
    }
    return true;
  };

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
      md.push(
        context.partials.member(item, memberHeadingLevel || headingLevel),
      );
      if (index < items.length - 1 && displayHr(item)) {
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
          md.push(
            heading(
              headingLevel,
              context.text.getTextFromKindString(group.title, true),
            ),
          );
          pushCategories(group.categories, headingLevel + 1);
        } else {
          const isPropertiesGroup = group.children.every((child) =>
            child.kindOf(ReflectionKind.Property),
          );

          const isEnumGroup = group.children.every((child) =>
            child.kindOf(ReflectionKind.EnumMember),
          );

          md.push(
            heading(
              headingLevel,
              context.text.getTextFromKindString(group.title, true),
            ),
          );

          if (
            isPropertiesGroup &&
            context.options.getValue('propertiesFormat') === 'table'
          ) {
            md.push(
              context.partials.propertiesTable(
                group.children,
                context.text.getTextFromKindString(group.title, true) ===
                  context.text.getText('kind.event.plural'),
              ),
            );
          } else if (
            isEnumGroup &&
            context.options.getValue('enumMembersFormat') === 'table'
          ) {
            md.push(context.partials.enumMembersTable(group.children));
          } else {
            pushChildren(group.children, headingLevel + 1);
          }
        }
      });
    }
  }

  return md.join('\n\n');
}
