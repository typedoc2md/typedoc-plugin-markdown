import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  isNoneSection,
  sortNoneSectionFirst,
} from '@plugin/theme/lib/index.js';
import {
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';

export function categories(
  this: MarkdownThemeContext,
  models: ReflectionCategory[],
  options: { headingLevel: number },
) {
  const md: string[] = [];
  models.sort(sortNoneSectionFirst).forEach((category) => {
    if (category.children.every((child) => this.router.hasOwnDocument(child))) {
      if (!isNoneSection(category)) {
        md.push(heading(options.headingLevel, category.title));
      }
      if (category.description) {
        md.push(this.helpers.getCommentParts(category.description));
      }
      md.push(this.partials.groupIndex(category));
    } else {
      const categoryChildren = category.children.filter(
        (child) => child.kind !== ReflectionKind.Constructor,
      ).filter(child => child.isDeclaration());
      if (categoryChildren.length) {
        if (!isNoneSection(category)) {
          md.push(heading(options.headingLevel, category.title));
        }
        if (category.description) {
          md.push(this.helpers.getCommentParts(category.description));
        }
        md.push(
          this.partials.members(categoryChildren, {
            headingLevel: isNoneSection(category)
              ? options.headingLevel
              : options.headingLevel + 1,
          }),
        );
      }
    }
  });
  return md.join('\n\n');
}
