import { MarkdownThemeRenderContext } from '../..';
import { NavigationItem } from '../../../theme/models';

/**
 * @category Partials
 */
export function navigation(
  context: MarkdownThemeRenderContext,
  navigationItems: NavigationItem[],
): string {
  const title =
    context.options.getValue('entryPoints')?.length > 1 ? 'Modules' : 'Exports';
  const md: string[] = [`## ${title}\n`];
  navigationItems.forEach((navigationItem) => {
    if (navigationItem.url) {
      md.push(
        `- [${navigationItem.title}](${context.parseUrl(navigationItem.url)})`,
      );
    }
  });
  return md.join('\n');
}
