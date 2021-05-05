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
  @BindOption('entryPoints')
  entryPoints!: string[];

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
    const sidebarPosition = this.getSidebarPosition(page);
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
    if (sidebarPosition) {
      items = { ...items, sidebar_position: parseFloat(sidebarPosition) };
    }
    if (page.url === page.project.url && this.entryPoints.length > 1) {
      items = { ...items, hide_table_of_contents: true };
    }
    return {
      ...items,
      custom_edit_url: null,
    };
  }

  getSidebarLabel(page: PageEvent) {
    const indexLabel =
      this.sidebar.indexLabel ||
      (this.entryPoints.length > 1 ? 'Table of contents' : 'Exports');

    if (page.url === this.entryDocument) {
      return page.url === page.project.url
        ? indexLabel
        : this.sidebar.readmeLabel;
    }

    if (page.url === this.globalsFile) {
      return indexLabel;
    }

    return this.sidebar.fullNames ? page.model.getFullName() : page.model.name;
  }

  getSidebarPosition(page: PageEvent) {
    if (page.url === this.entryDocument) {
      return page.url === page.project.url ? '0.5' : '0';
    }
    if (page.url === this.globalsFile) {
      return '0.5';
    }
    if (page.model.getFullName().split('.').length === 1) {
      return '0';
    }
    return null;
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
