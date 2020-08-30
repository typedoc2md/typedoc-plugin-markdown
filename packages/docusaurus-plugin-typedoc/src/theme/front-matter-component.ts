import { NavigationItem } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import { Component } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'docusaurus-frontmatter' })
export class DocsaurusFrontMatterComponent extends FrontMatterComponent {
  getYamlItems(page: PageEvent) {
    return {
      ...this.getDefaultValues(page),
      ...{
        sidebar_label: this.getSidebarLabel(page),
        hide_title: true,
        hide_table_of_contents: page.url === page.project.url,
      },
    };
  }

  getSidebarLabel(page: PageEvent) {
    if (page.model.name === page.project.name) {
      return page.url === page.project.url ? 'Globals' : 'README';
    }
    const item = this.findNavigationItem(page.navigation.children, page.url, null);
    return item ? item.title : page.model.name;
  }

  findNavigationItem(navigation: NavigationItem[], url: string, item: NavigationItem) {
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
