import { Reflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../markdown';
import { camelToTitleCase } from '../utils';

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
