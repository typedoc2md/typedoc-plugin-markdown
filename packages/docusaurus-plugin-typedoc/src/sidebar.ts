import * as fs from 'fs';
import * as path from 'path';

import { BindOption } from 'typedoc';
import { Component } from 'typedoc/dist/lib/converter/components';
import { RendererComponent } from 'typedoc/dist/lib/output/components';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

import { SidebarItem, SidebarOptions } from './types';

@Component({ name: 'sidebar' })
export class SidebarComponent extends RendererComponent {
  @BindOption('sidebar')
  sidebar!: SidebarOptions;
  @BindOption('siteDir')
  siteDir!: string;
  @BindOption('out')
  out!: string;

  initialize() {
    this.listenTo(this.application.renderer, {
      [RendererEvent.BEGIN]: this.onRendererBegin,
    });
  }

  onRendererBegin(renderer: RendererEvent) {
    const navigation = this.application.renderer.theme?.getNavigation(
      renderer.project,
    );

    // map the navigation object to a Docuaurus sidebar format
    const sidebarItems = navigation?.children
      ? navigation.children.map((navigationItem) => {
          if (navigationItem.isLabel) {
            const sidebarCategoryItems = navigationItem.children
              ? navigationItem.children.map((navItem) => {
                  const url = this.getUrlKey(this.out, navItem.url);
                  if (navItem.children && navItem.children.length > 0) {
                    const sidebarCategoryChildren = navItem.children.map(
                      (childGroup) =>
                        this.getSidebarCategory(
                          childGroup.title,
                          childGroup.children
                            ? childGroup.children.map((childItem) =>
                                this.getUrlKey(this.out, childItem.url),
                              )
                            : [],
                        ),
                    );
                    return this.getSidebarCategory(navItem.title, [
                      url,
                      ...sidebarCategoryChildren,
                    ]);
                  }
                  return url;
                })
              : [];
            return this.getSidebarCategory(
              navigationItem.title,
              sidebarCategoryItems,
            );
          }
          return this.getUrlKey(this.out, navigationItem.url);
        })
      : [];

    writeSidebar(
      this.sidebar,
      `module.exports = ${JSON.stringify(sidebarItems, null, 2)};`,
    );

    this.application.logger.success(
      `TypeDoc sidebar written to ${this.sidebar.sidebarPath}`,
    );
  }

  /**
   * returns a sidebar category node
   */
  getSidebarCategory(title: string, items: SidebarItem[]) {
    return {
      type: 'category',
      label: title,
      items,
    };
  }

  /**
   * returns the url key for relevant doc
   */
  getUrlKey(out: string, url: string) {
    const urlKey = url.replace('.md', '');
    return out ? out + '/' + urlKey : urlKey;
  }
}

/**
 * Write content to sidebar file
 */
export const writeSidebar = (sidebar: SidebarOptions, content: string) => {
  if (!fs.existsSync(path.dirname(sidebar.sidebarPath))) {
    fs.mkdirSync(path.dirname(sidebar.sidebarPath));
  }
  fs.writeFileSync(sidebar.sidebarPath, content);
};
