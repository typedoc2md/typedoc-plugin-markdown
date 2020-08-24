import * as path from 'path';

import * as fs from 'fs-extra';
import { Application, NavigationItem } from 'typedoc';

export const typedocPlugin = (options, ctx) => {
  let sidebarJson;
  let skipSidebar;
  let outFolder;
  let generateSidebar = false;
  return {
    name: 'vuepress-plugin-typedoc',

    async ready() {
      try {
        const sourceDir = ctx.sourceDir;
        const inputFiles = options.inputFiles;
        outFolder = options.out ? options.out : 'api';
        const out = sourceDir + '/' + outFolder;
        skipSidebar = options.skipSidebar || false;
        options.hideBreadcrumbs = true;

        delete options.skipSidebar;
        delete options.inputFiles;
        delete options.out;

        const app = new Application();
        app.bootstrap({
          plugin: ['typedoc-plugin-markdown'],
          theme: path.resolve(__dirname, '..', 'theme'),
          ...options,
        });

        const project = app.convert(app.expandInputFiles(inputFiles));
        app.generateDocs(project, out);
        const theme = app.renderer.theme as any;
        const navigation = theme.getNavigationV3(project);
        generateSidebar = app.renderer.theme!.isOutputDirectory(out) && !skipSidebar;
        sidebarJson = getSidebarJson(navigation, outFolder);
      } catch (e) {
        //console.log(e);
        return;
      }
    },

    async enhanceAppFiles() {
      return {
        name: 'typedoc-sidebar',
        content: `export default ({ siteData, options }) => {
          siteData.themeConfig.sidebarDepth = 2;
          siteData.themeConfig.sidebar = Object.assign({},siteData.themeConfig.sidebar,${JSON.stringify(
            generateSidebar
              ? {
                  [`/${outFolder}/`]: sidebarJson,
                }
              : null,
          )});
        }`,
      };
    },
  };
};

function getSidebarJson(navigation: NavigationItem, outFolder: string) {
  const navJson = [];

  navigation.children.forEach((navigationItem) => {
    if (navigationItem.url && navigationItem.children.length === 0) {
      const urlKey = navigationItem.url.replace('.md', '');
      navJson.push([urlKey === 'README' ? `/${outFolder}/` : 'globals', navigationItem.title]);
    } else {
      navJson.push({
        title: navigationItem.title,
        children: navigationItem.children.map((navItem) => {
          return [getUrlKey(navItem.url), navItem.title];
        }),
      });
    }
  });
  fs.outputFileSync('sidebars.json', JSON.stringify(navJson, null, 2));
  return navJson;
}
function getUrlKey(url: string) {
  return url.replace('.md', '');
}
