import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';
import { FormatStyle } from '../../models';
import { MarkdownThemeRenderContext } from '../../render-context';
import { SYMBOLS_WITH_DOCUMENTS } from '../../support/constants';
import { heading, horizontalRule } from '../../support/els';

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
    children
      ?.filter((item) => !item.hasOwnDocument)
      .forEach((item) => {
        md.push(context.member(item, memberHeadingLevel || headingLevel));
        if (SYMBOLS_WITH_DOCUMENTS.includes(item.kind)) {
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
      container.groups
        ?.filter((group) => !group.allChildrenHaveOwnDocument())
        .forEach((group) => {
          if (group.categories) {
            md.push(heading(headingLevel, group.title));
            pushCategories(group.categories, headingLevel + 1);
          } else {
            md.push(heading(headingLevel, group.title));

            const isPropertiesGroup = group.children.every((child) =>
              child.kindOf(ReflectionKind.Property),
            );

            const isEnumGroup = group.children.every((child) =>
              child.kindOf(ReflectionKind.EnumMember),
            );

            if (
              isPropertiesGroup &&
              context.options.getValue('propertiesFormat') === FormatStyle.Table
            ) {
              md.push(context.propertiesTable(group.children));
            } else if (
              isEnumGroup &&
              context.options.getValue('enumMembersFormat') ===
                FormatStyle.Table
            ) {
              md.push(context.enumMembersTable(group.children));
            } else {
              pushChildren(group.children, headingLevel + 1);
            }
          }
        });
    }
  }

  return md.join('\n\n');
}
