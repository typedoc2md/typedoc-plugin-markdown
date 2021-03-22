import * as path from 'path';

import { BindOption } from 'typedoc';
import {
  getPageTitle,
  prependYAML,
} from 'typedoc-plugin-markdown/dist/utils/front-matter';
import { Component } from 'typedoc/dist/lib/converter/components';
import { RendererComponent } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import { FrontMatter, Sidebar } from './types';

@Component({ name: 'front-matter' })
export class FrontMatterComponent extends RendererComponent {
  @BindOption('out')
  out!: string;
  @BindOption('sidebar')
  sidebar!: Sidebar;
  @BindOption('globalsTitle')
  globalsTitle!: string;
  @BindOption('readmeTitle')
  readmeTitle!: string;
  @BindOption('entryDocument')
  entryDocument!: string;

  globalsFile = 'modules.md';

  initialize() {
    super.initialize();
    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
    });
  }
  onPageEnd(page: PageEvent) {
    if (page.contents) {
      page.contents = prependYAML(page.contents, this.getYamlItems(page));
    }
  }

  getYamlItems(page: PageEvent): any {
    const pageId = this.getId(page);
    const pageTitle = this.getTitle(page);
    const sidebarLabel = this.getSidebarLabel(page);
    let items: FrontMatter = {
      id: pageId,
      title: pageTitle,
    };
    if (page.url === this.entryDocument) {
      items = { ...items, slug: '/' + this.out };
    }
    if (sidebarLabel && sidebarLabel !== pageTitle) {
      items = { ...items, sidebar_label: sidebarLabel };
    }
    if (page.url === page.project.url) {
      items = { ...items, hide_table_of_contents: true };
    }
    return {
      ...items,
      custom_edit_url: null,
      hide_title: true,
    };
  }

  getSidebarLabel(page: PageEvent) {
    if (!this.sidebar) {
      return null;
    }
    if (page.url === this.entryDocument) {
      return page.url === page.project.url
        ? this.sidebar.indexLabel
        : this.sidebar.readmeLabel;
    }

    if (page.url === this.globalsFile) {
      return this.sidebar.indexLabel;
    }
    return this.sidebar.fullNames ? page.model.getFullName() : page.model.name;
  }

  getId(page: PageEvent) {
    return path.basename(page.url, path.extname(page.url));
  }

  getTitle(page: PageEvent) {
    const readmeTitle = this.readmeTitle || page.project.name;
    if (page.url === this.entryDocument && page.url !== page.project.url) {
      return readmeTitle;
    }
    return getPageTitle(page);
  }
}
