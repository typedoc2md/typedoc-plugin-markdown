import { heading } from '@plugin/libs/markdown';
import { ReflectionCategory } from 'typedoc';
import { MarkdownThemeContext } from '../../markdown-themecontext';

/**
 * Renders a collection of reflection categories.
 *
 * @category Container Partials
 */
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
          this.partials.members(category.children, {
            headingLevel: options.headingLevel + 1,
          }),
        );
      }
    });
  return md.join('\n\n');
}
