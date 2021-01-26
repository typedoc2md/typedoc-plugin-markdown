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
    const sidebarPath = path.resolve(this.siteDir, this.sidebar.sidebarFile);
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
                        this.sidebarCategory(
                          childGroup.title,
                          childGroup.children
                            ? childGroup.children.map((childItem) =>
                                this.getUrlKey(this.out, childItem.url),
                              )
                            : [],
                        ),
                    );
                    return this.sidebarCategory(navItem.title, [
                      url,
                      ...sidebarCategoryChildren,
                    ]);
                  }
                  return url;
                })
              : [];
            return this.sidebarCategory(
              navigationItem.title,
              sidebarCategoryItems,
            );
          }
          return this.getUrlKey(this.out, navigationItem.url);
        })
      : [];

    // write result to disk
    if (!fs.existsSync(path.dirname(sidebarPath))) {
      fs.mkdirSync(path.dirname(sidebarPath));
    }
    fs.writeFileSync(
      sidebarPath,
      `module.exports = ${JSON.stringify(sidebarItems, null, 2)};`,
    );

    this.application.logger.success(
      `TypeDoc sidebar written to ${sidebarPath}`,
    );
  }

  /**
   * returns a sidebar category node
   */
  sidebarCategory(title: string, items: SidebarItem[]) {
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
