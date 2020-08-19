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
  const docsRoot = path.resolve(siteDir, 'docs');
  const outFolder = options.out ? options.out : undefined;
  const out = docsRoot + (options.out ? '/' + options.out : '');
  const skipSidebar = options.skipSidebar || false;

  delete options.skipSidebar;
  delete options.inputFiles;
  delete options.out;

  return {
    name: 'docusaurus-plugin-typedoc',

    async loadContent() {
      try {
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
          const sidebarContent = getNavObject(outFolder, navigation);
          writeSideBar(sidebarContent, sidebarPath);
        }
      } catch (e) {
        return;
      }
    },
  };
}

function getNavObject(outFolder, navigation) {
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
      const pageUrl = outFolder ? outFolder + '/' + url : url;
      if (!navObject[navKey].includes(pageUrl)) {
        navObject[navKey].push(pageUrl);
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
