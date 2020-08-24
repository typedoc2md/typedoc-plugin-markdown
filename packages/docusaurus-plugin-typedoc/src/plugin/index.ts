import * as path from 'path';

import { LoadContext, Plugin } from '@docusaurus/types';
import * as fs from 'fs-extra';
import { Application, NavigationItem } from 'typedoc';

export default function pluginDocusaurus(
  context: LoadContext,
  options: Partial<any>,
): Plugin<any> {
  const { siteDir } = context;
  const inputFiles = options.inputFiles;
  const docsRoot = path.resolve(siteDir, options.docsRoot || 'docs');
  const outFolder = options.out !== undefined ? options.out : 'api';
  const out = docsRoot + (outFolder ? '/' + outFolder : '');
  const skipSidebar = options.skipSidebar || false;
  options.hideBreadcrumbs = true;

  delete options.skipSidebar;
  delete options.inputFiles;
  delete options.out;

  return {
    name: 'docusaurus-plugin-typedoc',

    async loadContent() {
      try {
        const app = new Application();
        app.bootstrap({
          plugin: ['typedoc-plugin-markdown'],
          theme: path.resolve(__dirname, '..', 'theme'),
          ...options,
        });
        const project = app.convert(app.expandInputFiles(inputFiles));
        app.generateDocs(project, out);

        if (app.renderer.theme!.isOutputDirectory(out) && !skipSidebar) {
          const sidebarPath = path.resolve(siteDir, 'sidebars.js');
          const theme = app.renderer.theme as any;
          const navigation = theme.getNavigationV3(project);
          const sidebarContent = getSidebarJson(navigation, outFolder);
          writeSideBar(sidebarContent, sidebarPath);
        }
      } catch (e) {
        // console.log(e);
        return;
      }
    },
  };
}

function getSidebarJson(navigation: NavigationItem, outFolder: string) {
  const navJson = [];

  navigation.children.forEach((navigationItem) => {
    if (navigationItem.url && navigationItem.children.length === 0) {
      navJson.push(getUrlKey(outFolder, navigationItem.url));
    } else {
      const category = {
        type: 'category',
        label: navigationItem.title,
        items: navigationItem.children.map((navItem) => {
          const url = getUrlKey(outFolder, navItem.url);
          if (navItem.children.length > 0) {
            const childGroups = navItem.children.map((child) => {
              return {
                type: 'category',
                label: child.title,
                items: child.children.map((c) => getUrlKey(outFolder, c.url)),
              };
            });
            return {
              type: 'category',
              label: navItem.title,
              items: [url, ...childGroups],
            };
          }
          return url;
        }),
      };
      navJson.push(category);
    }
  });
  return { typedocSidebar: navJson };
}

function getUrlKey(outFolder: string, url: string) {
  const urlKey = url.replace('.md', '');
  return outFolder ? outFolder + '/' + urlKey : urlKey;
}

function writeSideBar(navigationJson: any, sidebarPath: string) {
  let jsonContent: any;
  if (!fs.existsSync(sidebarPath)) {
    jsonContent = JSON.parse('{}');
  } else {
    jsonContent = require(sidebarPath);
  }

  jsonContent = Object.assign({}, jsonContent, navigationJson);
  try {
    fs.outputFileSync(
      sidebarPath,
      'module.exports = ' + JSON.stringify(jsonContent, null, 2) + ';',
    );
    console.log(
      `[docusaurus-plugin-typedoc] sidebar updated at ${sidebarPath}`,
    );
  } catch (e) {
    console.log(
      `[docusaurus-plugin-typedoc] failed to update sidebar at ${sidebarPath}`,
    );
  }
}
