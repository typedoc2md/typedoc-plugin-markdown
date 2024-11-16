import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

export function groups(
  this: MarkdownThemeContext,
  model: ReflectionGroup[],
  options: { headingLevel: number; kind: ReflectionKind },
) {
  const groupsWithChildren = model?.filter(
    (group) => !group.allChildrenHaveOwnDocument(),
  );

  const md: string[] = [];

  const getGroupTitle = (groupTitle: string) => {
    return groupTitle;
  };

  groupsWithChildren?.forEach((group) => {
    const isEventProps = getGroupTitle(group.title) === 'Events';
    if (group.categories) {
      md.push(heading(options.headingLevel, getGroupTitle(group.title)));
      if (group.description) {
        md.push(this.helpers.getCommentParts(group.description));
      }
      md.push(
        this.partials.categories(group.categories, {
          headingLevel: options.headingLevel + 1,
        }),
      );
    } else {
      const isPropertiesGroup = group.children.every(
        (child) => child.kind === ReflectionKind.Property,
      );

      const isEnumGroup = group.children.every(
        (child) => child.kind === ReflectionKind.EnumMember,
      );

      md.push(heading(options.headingLevel, getGroupTitle(group.title)));

      if (group.description) {
        md.push(this.helpers.getCommentParts(group.description));
      }
      if (
        isPropertiesGroup &&
        this.helpers.useTableFormat('properties', options.kind)
      ) {
        md.push(
          this.partials.propertiesTable(
            group.children as DeclarationReflection[],
            {
              isEventProps,
            },
          ),
        );
      } else if (isEnumGroup && this.helpers.useTableFormat('enums')) {
        md.push(
          this.partials.enumMembersTable(
            group.children as DeclarationReflection[],
          ),
        );
      } else {
        if (group.children) {
          md.push(
            this.partials.members(group.children as DeclarationReflection[], {
              headingLevel: options.headingLevel + 1,
              groupTitle: group.title,
            }),
          );
        }
      }
    }
  });
  return md.join('\n\n');
}
