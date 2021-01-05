import { Renderer } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter';
import { Component } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { FrontMatter, PluginOptions, SidebarOptions } from './types';

@Component({ name: 'docusaurus-frontmatter' })
export class DocusaurusFrontMatterComponent extends FrontMatterComponent {
  outFolder: string;
  sidebar: SidebarOptions | null;
  readmeTitle?: string;
  entryDocument = 'index.md';
  globalsFile = 'modules.md';

  constructor(renderer: Renderer, options: PluginOptions) {
    super(renderer);
    this.outFolder = options?.out;
    this.sidebar = options?.sidebar;
    this.readmeTitle = options?.readmeTitle;
  }
  getYamlItems(page: PageEvent): FrontMatter {
    const pageId = this.getId(page);
    const pageTitle = this.getTitle(page);
    const sidebarLabel = this.getSidebarLabel(page);
    let items: FrontMatter = {
      id: pageId,
      title: pageTitle,
    };
    if (page.url === this.entryDocument) {
      items = { ...items, slug: '/' + this.outFolder };
    }
    if (this.sidebar && sidebarLabel !== pageTitle) {
      items = { ...items, sidebar_label: sidebarLabel };
    }
    return {
      ...items,
      hide_title: true,
    };
  }

  getTitle(page: PageEvent) {
    const readmeTitle = this.readmeTitle || page.project.name;
    if (page.url === this.entryDocument && page.url !== page.project.url) {
      return readmeTitle;
    }
    return super.getTitle(page);
  }

  getSidebarLabel(page: PageEvent) {
    if (page.url === this.entryDocument) {
      return page.url === page.project.url
        ? this.sidebar?.indexLabel
        : this.sidebar?.readmeLabel;
    }

    if (page.url === this.globalsFile) {
      return this.sidebar?.indexLabel;
    }
    return this.sidebar?.fullNames ? page.model.getFullName() : page.model.name;
  }
}
