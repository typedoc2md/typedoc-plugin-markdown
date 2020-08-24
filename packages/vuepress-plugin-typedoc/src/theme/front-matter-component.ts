import { FrontMatterComponentV3 } from 'typedoc-plugin-markdown/dist/components/front-matter-v3.component';
import { Component } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'vuepress-frontmatter' })
export class VuepressFrontMatterComponent extends FrontMatterComponentV3 {
  getYamlItems(page: PageEvent) {
    return {
      ...this.getDefaultValues(page),
      ...{ sidebarDepth: this.getSidebarDepth(page) },
    };
  }

  getSidebarDepth(page: PageEvent) {
    return page.url === page.project.url ? 0 : 'auto';
  }
}
