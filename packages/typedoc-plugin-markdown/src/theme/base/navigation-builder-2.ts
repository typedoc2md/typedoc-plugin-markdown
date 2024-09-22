import { MarkdownTheme } from '@plugin/theme';
import { MarkdownRenderer, NavigationItem, UrlMapping } from '@plugin/types';
import { Options, Reflection } from 'typedoc';

export class NavigationBuilder2 {
  private options: Options;
  private packagesMeta: any;
  private navigationOptions: {
    excludeCategories: boolean;
    excludeGroups: boolean;
    excludeFolders: boolean;
  };
  private navigation: NavigationItem[] = [];
  private isPackages: boolean;

  constructor(
    public theme: MarkdownTheme,
    public urls: UrlMapping<Reflection>[],
  ) {
    this.options = theme.application.options;

    this.packagesMeta = (
      theme.application.renderer as unknown as MarkdownRenderer
    ).packagesMeta;
  }

  getNewNavigation() {
    //console.log(buildNav(this.urls));
    return buildNavStructure(this.urls);
  }
}

export type NavItem = {
  title: string;
  url?: string;
  children: NavItem[];
};

export type InputItem = {
  url: string;
  model: {
    id?: number;
    name: string;
    kind?: number;
  };
};

function buildNavStructure(items: InputItem[]): NavItem[] {
  const nav: NavItem[] = [];
  const parentMap: { [key: string]: NavItem } = {};

  // Keep track of the "Namespaces" block specifically
  let namespacesBlock: NavItem | null = null;

  items.forEach((item) => {
    const { url, model } = item;
    const parts = url.split('/');
    let currentLevel = nav;

    parts.forEach((part, index) => {
      const isLastPart = index === parts.length - 1;

      if (isLastPart) {
        if (model.name) {
          const newNavItem: NavItem = {
            title: model.name,
            url: url,
            children: [],
          };

          if (part === 'README.md') {
            currentLevel.push(newNavItem);
            parentMap[url.replace('/README.md', '')] = newNavItem;

            if (url === 'has-namespaces/Namespaces.md') {
              namespacesBlock = newNavItem;
            }
          } else {
            const parentFolder = parts.slice(0, -1).join('/');
            const parentEntry = parentMap[parentFolder];

            if (parentEntry) {
              parentEntry.children.push(newNavItem);
            } else {
              currentLevel.push(newNavItem);
            }
          }
        }
      } else {
        // Handle the folder structure
        const folderTitle = part.replace('.md', '');
        let found = currentLevel.find((el) => el.title === folderTitle);

        if (!found) {
          found = { title: folderTitle, children: [] };
          currentLevel.push(found);
        }

        currentLevel = found.children;

        // Special case: if the URL starts with 'has-namespaces/namespaces', treat it as a child of the "Namespaces" block
        if (url.startsWith('has-namespaces/namespaces') && namespacesBlock) {
          currentLevel = namespacesBlock.children;
        }

        // Map the current folder to ensure children can be correctly added later
        const currentPath = parts.slice(0, index + 1).join('/');
        parentMap[currentPath] = found;
      }
    });
  });

  return nav;
}
