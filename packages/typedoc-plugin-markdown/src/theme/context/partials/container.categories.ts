import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionCategory } from 'typedoc';

export function categories(
  this: MarkdownThemeContext,
  model: ReflectionCategory[],
  options: { headingLevel: number },
) {
  const md: string[] = [];
  model
    ?.filter((category) => !category.allChildrenHaveOwnDocument())
    .forEach((category) => {
      md.push(heading(options.headingLevel, category.title));
      if (category.description) {
        md.push(this.partials.commentParts(category.description));
      }
      if (category.children) {
        md.push(
          this.partials.members(category.children as DeclarationReflection[], {
            headingLevel: options.headingLevel + 1,
          }),
        );
      }
    });
  return md.join('\n\n');
}
