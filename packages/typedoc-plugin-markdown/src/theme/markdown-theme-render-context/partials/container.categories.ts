import { heading } from '@plugin/theme/lib/markdown';
import { ReflectionCategory } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../markdown-theme-render-context';

/**
 * Renders a collection of reflection categories.
 *
 * @category Container Partials
 */
export function categories(
  context: MarkdownThemeRenderContext,
  model: ReflectionCategory[],
  headingLevel: number,
) {
  const md: string[] = [];
  model
    ?.filter((category) => !category.allChildrenHaveOwnDocument())
    .forEach((category) => {
      md.push(heading(headingLevel, category.title));
      if (category.description) {
        md.push(context.partials.commentParts(category.description));
      }
      if (category.children) {
        md.push(context.partials.members(category.children, headingLevel + 1));
      }
    });
  return md.join('\n\n');
}
