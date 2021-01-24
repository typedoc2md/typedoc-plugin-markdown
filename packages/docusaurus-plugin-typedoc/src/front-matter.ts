import * as path from 'path';

import { BindOption } from 'typedoc';
import { reflectionTitle } from 'typedoc-plugin-markdown/dist/resources/helpers/reflection-title';
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
      page.contents = page.contents
        .replace(/^/, this.getYamlString(this.getYamlItems(page)) + '\n\n')
        .replace(/[\r\n]{3,}/g, '\n\n');
    }
  }

  getYamlString(yamlItems: { [key: string]: string | number | boolean }) {
    const yaml = `---
${Object.entries(yamlItems)
  .map(
    ([key, value]) =>
      `${key}: ${
        typeof value === 'string' ? `"${this.escapeYAMLString(value)}"` : value
      }`,
  )
  .join('\n')}
---`;
    return yaml;
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
    return {
      ...items,
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
    return reflectionTitle.call(page, false);
  }

  // prettier-ignore
  escapeYAMLString(str: string) {
    return str.replace(/([^\\])'/g, '$1\\\'').replace(/\"/g, '');
  }
}
