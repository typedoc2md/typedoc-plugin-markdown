import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import {
  DeclarationReflection,
  DocumentReflection,
  ProjectReflection,
} from 'typedoc';

/**
 *
 * @category Member Partials
 */
export function reflectionIndex(
  this: MarkdownThemeContext,
  model: ProjectReflection | DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.categories) {
    model.categories.forEach((categoryGroup) => {
      md.push(heading(options.headingLevel, categoryGroup.title) + '\n');
      if (categoryGroup.description) {
        md.push(this.partials.commentParts(categoryGroup.description) + '\n');
      }
      md.push(this.helpers.getGroupIndex(categoryGroup) + '\n');
    });
  } else {
    const groups = model.groups?.filter(
      (group) =>
        group.allChildrenHaveOwnDocument() &&
        !(group.owningReflection instanceof DocumentReflection),
    );

    if (this.options.getValue('excludeGroups')) {
      const children = groups?.reduce((acc, group) => {
        return [...acc, ...group.children];
      }, []);
      if (this.options.getValue('indexFormat') === 'table') {
        md.push(
          heading(options.headingLevel, this.i18n.theme_member_plural()) + '\n',
        );
        md.push(
          this.helpers.getGroupIndexTable(
            (children as DeclarationReflection[]) || [],
          ),
        );
      } else {
        md.push(
          this.helpers.getGroupIndexList(
            (children as DeclarationReflection[]) || [],
          ),
        );
      }
    } else {
      groups?.forEach((reflectionGroup) => {
        if (reflectionGroup.categories) {
          md.push(heading(options.headingLevel, reflectionGroup.title) + '\n');
          reflectionGroup.categories.forEach((categoryGroup) => {
            md.push(
              heading(options.headingLevel + 1, categoryGroup.title) + '\n',
            );
            if (categoryGroup.description) {
              md.push(
                this.partials.commentParts(categoryGroup.description) + '\n',
              );
            }
            md.push(this.helpers.getGroupIndex(categoryGroup) + '\n');
          });
        } else {
          md.push(heading(options.headingLevel, reflectionGroup.title) + '\n');
          md.push(this.helpers.getGroupIndex(reflectionGroup) + '\n');
        }
      });
    }
  }
  return md.join('\n');
}
