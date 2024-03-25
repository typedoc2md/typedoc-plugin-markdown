import { backTicks } from '@theme/lib/markdown';
import { camelToTitleCase } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { Reflection } from 'typedoc';

/**
 * Renders the flags of a reflection.
 *
 * @category Member Partials
 */
export function reflectionFlags(
  context: MarkdownThemeRenderContext,
  reflection: Reflection,
): string {
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

  return flags.map((item) => backTicks(item)).join(' ');
}
