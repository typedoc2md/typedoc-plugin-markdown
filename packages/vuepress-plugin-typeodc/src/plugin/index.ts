import * as path from 'path';

import { Application } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

export const typedocPlugin = (options, ctx) => {
  let sidebarJson;
  let skipSidebar;
  let outFolder;
  return {
    name: 'vuepress-plugin-typedoc',

    async ready() {
      const sourceDir = ctx.sourceDir;
      const inputFiles = options.inputFiles;
      outFolder = options.out ? options.out : 'api';
      const out = sourceDir + '/' + outFolder;
      skipSidebar = options.skipSidebar || false;

      delete options.skipSidebar;
      delete options.inputFiles;
      delete options.out;

      const app = new Application();
      app.bootstrap({
        module: ModuleKind.CommonJS,
        target: ScriptTarget.ES5,
        disableOutputCheck: true,
        readme: 'none',
        plugin: ['typedoc-plugin-markdown'],
        theme: path.resolve(__dirname, '..', 'theme'),
        ...options,
      });

      const project = app.convert(app.expandInputFiles(inputFiles));
      app.generateDocs(project, out);

      const navigation = app.renderer.theme.getNavigation(project);
      sidebarJson = getSidebarJson(navigation);
    },

    async enhanceAppFiles() {
      return {
        name: 'typedoc-sidebar',
        content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = Object.assign({},siteData.themeConfig.sidebar,${JSON.stringify(
          skipSidebar
            ? null
            : {
                [`/${outFolder}/`]: sidebarJson,
              },
        )}) }`,
      };
    },
  };
};

function getSidebarJson(navigation) {
  const navObject = {};
  let url = '';
  let navKey = '';
  const titleMap = {};
  navigation.children.forEach((rootNavigation) => {
    rootNavigation.children.forEach((item) => {
      url = item.url.replace('.md', '');
      navKey = url.substr(0, url.indexOf('/'));
      if (navKey !== undefined && navKey.length) {
        navKey = navKey[0].toUpperCase() + navKey.slice(1);
      }
      if (navObject[navKey] === undefined) {
        navObject[navKey] = [];
      }
      if (!navObject[navKey].includes(url)) {
        titleMap[url] = item.title;
        navObject[navKey].push(url);
      }
    });
  });
  const navJson = Object.entries(navObject).map(([key, value]) => {
    const items = value as any;
    return {
      title: key,
      children: items.map((item) => [item, titleMap[item]]),
    };
  });
  return navJson;
}
