import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import {
  DeclarationReflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';

export function categories(
  this: MarkdownThemeContext,
  model: ReflectionCategory[],
  options: { headingLevel: number },
) {
  const md: string[] = [];
  model
    ?.filter((category) => !category.allChildrenHaveOwnDocument())
    .forEach((category) => {
      const categoryChildren = category.children?.filter(
        (child) => child.kind !== ReflectionKind.Constructor,
      );
      if (categoryChildren.length) {
        md.push(heading(options.headingLevel, category.title));
        if (category.description) {
          md.push(this.helpers.getCommentParts(category.description));
        }
        md.push(
          this.partials.members(categoryChildren as DeclarationReflection[], {
            headingLevel: options.headingLevel + 1,
          }),
        );
      }
    });
  return md.join('\n\n');
}
