import { NavigationItem } from '../../models';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function navigation(
  context: MarkdownThemeRenderContext,
  navigationItems: NavigationItem[],
) {
  const title =
    context.getOption('entryPoints')?.length > 1 ? 'Modules' : 'Exports';
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
