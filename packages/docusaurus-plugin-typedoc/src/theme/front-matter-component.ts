import { FrontMatterComponentV3 } from 'typedoc-plugin-markdown/dist/components/front-matter-v3.component';
import { Component } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'docusaurus-frontmatter' })
export class DocsaurusFrontMatterComponent extends FrontMatterComponentV3 {
  getYamlItems(page: PageEvent) {
    return {
      ...this.getDefaultValues(page),
      ...{
        sidebar_label: this.getSidebarLabel(page),
        hide_title: 'true',
      },
    };
  }

  getSidebarLabel(page: PageEvent) {
    if (page.model.name === page.project.name) {
      return page.url === page.project.url ? 'Globals' : 'README';
    }
    return page.model.name;
  }
}
