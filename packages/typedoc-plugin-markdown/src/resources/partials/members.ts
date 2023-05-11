import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';
import { FormatStyle } from '../../models';
import { SYMBOLS_WITH_DOCUMENTS } from '../../support/constants';
import { heading, horizontalRule } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function members(
  context: MarkdownThemeRenderContext,
  container: ContainerReflection,
  headingLevel: number,
) {
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
        md.push(
          context.partials.member(item, memberHeadingLevel || headingLevel),
        );
        if (SYMBOLS_WITH_DOCUMENTS.includes(item.kind)) {
          md.push(horizontalRule());
        }
      });
  };

  if (container.categories?.length) {
    pushCategories(container.categories, headingLevel);
  } else {
    if (
      context.getOption('excludeGroups') &&
      container.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])
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
              context.getOption('propertiesFormat') === FormatStyle.Table
            ) {
              md.push(context.partials.propertiesTable(group.children));
            } else if (
              isEnumGroup &&
              context.getOption('enumMembersFormat') === FormatStyle.Table
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
