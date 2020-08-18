import * as path from 'path';

import { LoadContext, Plugin } from '@docusaurus/types';
import * as fs from 'fs-extra';
import { Application } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

export default function pluginDocusaurus(
  context: LoadContext,
  options: Partial<any>,
): Plugin<any> {
  const { siteDir } = context;

  const inputFiles = options.inputFiles;
  const out = options.out || path.resolve(siteDir, 'docs');
  const skipSidebar = options.skipSidebar || false;

  delete options.skipSidebar;
  delete options.inputFiles;
  delete options.out;

  return {
    name: 'docusaurus-plugin-typedoc',

    async loadContent() {
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
      if (!skipSidebar) {
        const sidebarPath = path.resolve(siteDir, 'sidebars.js');
        const navigation = app.renderer.theme.getNavigation(project);
        const sidebarContent = getNavObject(navigation);
        writeSideBar(sidebarContent, sidebarPath);
      }
    },
  };
}

function getNavObject(navigation) {
  const navObject = {};
  let url = '';
  let navKey = '';
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
        navObject[navKey].push(url);
      }
    });
  });
  return { typedoc: navObject };
}

function writeSideBar(navObject: any, sidebarPath: string) {
  let jsonContent: any;
  if (!fs.existsSync(sidebarPath)) {
    jsonContent = JSON.parse('{}');
  } else {
    jsonContent = require(sidebarPath);
  }

  jsonContent = Object.assign({}, jsonContent, navObject);
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
