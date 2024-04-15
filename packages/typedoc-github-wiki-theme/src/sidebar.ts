import { NavigationItem } from 'typedoc-plugin-markdown';

export function getSidebar(navigationItems: NavigationItem[]) {
  const parseSidebarUrl = (url: string) => '../wiki/' + url.replace('.md', '');
  const md: string[] = [];

  navigationItems.forEach((navigationItem) => {
    const navItemMd: string[] = [];
    if (navigationItem.path) {
      navItemMd.push(
        `- [${navigationItem.title}](${parseSidebarUrl(navigationItem.path)})`,
      );
    } else {
      md.push(`### ${navigationItem.title}\n`);
      if (navigationItem.children) {
        const childList = navigationItem.children
          ?.map(
            (child) =>
              `- [${child.title}](${parseSidebarUrl(child.path || '')})`,
          )
          .join('\n');
        navItemMd.push(childList + '\n');
      }
    }
    md.push(navItemMd.join('\n'));
  });

  return md.join('\n');
}
