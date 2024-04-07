import { backTicks } from '@plugin/libs/markdown';
import { camelToTitleCase } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { Reflection } from 'typedoc';

/**
 * Renders the flags of a reflection.
 *
 * @category Member Partials
 */
export function reflectionFlags(
  this: MarkdownThemeContext,
  model: Reflection,
): string {
  const flagsNotRendered: `@${string}`[] = [
    '@showCategories',
    '@showGroups',
    '@hideCategories',
    '@hideGroups',
  ];

  const flags: string[] = [];

  if (model.comment) {
    for (const tag of model.comment.modifierTags) {
      if (!flagsNotRendered.includes(tag)) {
        flags.push(camelToTitleCase(tag.substring(1)));
      }
    }
  }

  return flags.map((item) => backTicks(item)).join(' ');
}
