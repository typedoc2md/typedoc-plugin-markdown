import {
  Comment,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
} from 'typedoc';
import { getTagName } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function frontmatter(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const yaml = `---\n${Object.entries({
    ...context.baseFrontmatterVars(page),
    ...(page.model.comment &&
      getFrontmatterTags(
        page.model.comment,
        context.getOption('frontmatterTags'),
      )),
    ...context.getOption('frontmatterGlobals'),
  })
    .map(
      ([key, value]) =>
        `${key}: ${typeof value === 'string' ? `"${value}"` : value}`,
    )
    .join('\n')}\n---`;
  return yaml;
}

function getFrontmatterTags(comment: Comment, frontMatterTags: string[]) {
  if (!comment) {
    return {};
  }

  if (comment.blockTags?.length) {
    const tags = comment.blockTags
      .filter((tag) => frontMatterTags.includes(getTagName(tag)))
      .reduce((prev, current) => {
        const tagName = getTagName(current);
        const tagValue = current.content
          .filter((commentPart) => commentPart.kind === 'text')
          .map((commentPart) => commentPart.text)
          .join('');
        return {
          ...prev,
          [tagName]: tagValue,
        };
      }, {});
    return tags;
  }
  return {};
}
