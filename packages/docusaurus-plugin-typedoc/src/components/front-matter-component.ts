import { NavigationItem, Renderer } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import { Component } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { SidebarOptions } from '../types';

@Component({ name: 'docusaurus-frontmatter' })
export class DocsaurusFrontMatterComponent extends FrontMatterComponent {
  outFolder: string;
  sidebar: SidebarOptions | null;
  constructor(
    owner: Renderer,
    outFolder: string,
    sidebar: SidebarOptions | null,
  ) {
    super(owner);
    this.outFolder = outFolder;
    this.sidebar = sidebar;
  }
  getYamlItems(page: PageEvent) {
    let items: Record<string, any> = this.getDefaultValues(page);
    if (page.url === 'index.md') {
      items = { ...items, slug: '/' + this.outFolder };
      if (page.url !== page.project.url && this.sidebar?.readmeLabel) {
        items = { ...items, title: this.sidebar.readmeLabel };
      }
    }
    if (this.sidebar) {
      items = { ...items, sidebar_label: this.getSidebarLabel(page) };
    }
    return {
      ...items,
      hide_title: true,
    } as any;
  }

  getSidebarLabel(page: PageEvent) {
    if (page.model.name === page.project.name) {
      return page.url === page.project.url
        ? this.sidebar?.globalsLabel
        : this.sidebar?.readmeLabel;
    }

    const item =
      page.navigation && page.navigation.children
        ? this.findNavigationItem(page.navigation.children, page.url)
        : undefined;

    const getShortName = (title: string) => {
      const longTitle = title.split('.');
      return longTitle[longTitle.length - 1];
    };

    if (item) {
      return this.sidebar && this.sidebar.fullNames
        ? item.title
        : getShortName(item.title);
    }
    return page.model.name;
  }

  findNavigationItem(
    navigation: NavigationItem[],
    url: string,
    item?: NavigationItem,
  ) {
    navigation.forEach((navigationChild) => {
      if (navigationChild.url === url) {
        item = navigationChild;
        return;
      }
      if (navigationChild.children) {
        item = this.findNavigationItem(navigationChild.children, url, item);
      }
    });
    return item;
  }
}
