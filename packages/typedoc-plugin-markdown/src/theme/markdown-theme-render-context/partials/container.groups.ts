import { heading } from '@plugin/theme/lib/markdown';
import { ReflectionGroup, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../markdown-theme-render-context';

/**
 * Renders a collection of reflection groups.
 *
 * @category Container Partials
 */
export function groups(
  context: MarkdownThemeRenderContext,
  model: ReflectionGroup[],
  headingLevel: number,
) {
  const groupsWithChildren = model?.filter(
    (group) => !group.allChildrenHaveOwnDocument(),
  );

  const md: string[] = [];
  groupsWithChildren?.forEach((group, index: number) => {
    if (group.categories) {
      md.push(
        heading(
          headingLevel,
          context.helpers.getTextFromKindString(group.title, true),
        ),
      );
      if (group.description) {
        md.push(context.partials.commentParts(group.description));
      }
      md.push(context.partials.categories(group.categories, headingLevel + 1));
    } else {
      const isPropertiesGroup = group.children.every(
        (child) => child.kind === ReflectionKind.Property,
      );

      const isEnumGroup = group.children.every(
        (child) => child.kind === ReflectionKind.EnumMember,
      );

      md.push(
        heading(
          headingLevel,
          context.helpers.getTextFromKindString(group.title, true),
        ),
      );
      if (group.description) {
        md.push(context.partials.commentParts(group.description));
      }
      if (
        isPropertiesGroup &&
        context.options.getValue('propertiesFormat') === 'table'
      ) {
        md.push(
          context.partials.declarationsTable(
            group.children,
            context.helpers.getTextFromKindString(group.title, true) ===
              context.helpers.getText('kind.event.plural'),
          ),
        );
      } else if (
        isEnumGroup &&
        context.options.getValue('enumMembersFormat') === 'table'
      ) {
        md.push(context.partials.enumMembersTable(group.children));
      } else {
        if (group.children) {
          md.push(context.partials.members(group.children, headingLevel + 1));
        }
      }
    }
  });
  return md.join('\n\n');
}
