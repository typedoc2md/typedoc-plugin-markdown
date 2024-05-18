import { MarkdownThemeContext } from 'public-api';
import { DeclarationReflection } from 'typedoc';

export function getDescriptionForReflection(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
) {
  const comment = model.signatures?.length
    ? model.signatures[0].comment
    : model.comment;
  if (comment?.summary?.length) {
    return this.partials
      .commentParts(comment.summary)
      ?.split('\n\n')[0]
      .replace(/\n/g, ' ');
  }
  return null;
}
