import { camelToTitleCase } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, SignatureReflection } from 'typedoc';

export function getCommentFlags(
  this: MarkdownThemeContext,
  reflection: DeclarationReflection | SignatureReflection,
): string[] {
  const flagsNotRendered: `@${string}`[] = [
    '@showCategories',
    '@showGroups',
    '@hideCategories',
    '@hideGroups',
  ];
  const flags: string[] = [];
  if (reflection.comment) {
    for (const tag of reflection.comment.modifierTags) {
      if (!flagsNotRendered.includes(tag)) {
        flags.push(camelToTitleCase(tag.substring(1)));
      }
    }
  }
  return flags;
}
