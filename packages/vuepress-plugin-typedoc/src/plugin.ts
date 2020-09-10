import { Application, NavigationItem, ProjectReflection } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';

import { PluginOptions, SidebarOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  inputFiles: [],
  out: 'api',
  hideBreadcrumbs: true,
  skipSidebar: false,
  sidebar: {
    parentCategory: 'none',
    fullNames: false,
  },
};

const app = new Application();
let done = false;

export const typedocPlugin = (pluginOptions: PluginOptions, ctx: any) => {
  let project: ProjectReflection;
  const sourceDir = ctx.sourceDir;

  const options = { ...DEFAULT_PLUGIN_OPTIONS, ...pluginOptions };

  const inputFiles = options.inputFiles;
  const outFolder = options.out ? options.out : 'api';
  const out = sourceDir + '/' + outFolder;
  const sidebar = options.skipSidebar ? null : options.sidebar;

  // remove docusaurus props (everything else is passed to renderer)
  delete options.id;
  delete options.sidebar;
  delete options.skipSidebar;
  delete options.inputFiles;
  delete options.out;

  return {
    name: 'vuepress-plugin-typedoc',

    async ready() {
      // don't re-compile
      if (done) {
        return;
      }

      app.bootstrap({
        plugin: ['typedoc-plugin-markdown'],
        ...options,
      });

      app.renderer.addComponent(
        'frontmatter',
        new FrontMatterComponent(app.renderer),
      );

      project = app.convert(app.expandInputFiles(inputFiles));

      app.generateDocs(project, out);
    },

    async enhanceAppFiles() {
      if (done || !sidebar) {
        return;
      }

      const theme = app.renderer.theme as any;

      const navigation = theme.getNavigation(project);

      return {
        name: 'typedoc-sidebar',
        content: `export default ({ siteData, options }) => {
          siteData.themeConfig.sidebarDepth = 0;
          siteData.themeConfig.sidebar = Object.assign({},siteData.themeConfig.sidebar,${JSON.stringify(
            {
              [`/${outFolder}/`]: getSidebarJson(
                navigation,
                outFolder,
                sidebar,
              ),
            },
          )});
        }`,
      };
    },

    afterDevServer() {
      done = true;
    },
  };
};

function getSidebarJson(
  navigation: NavigationItem,
  outFolder: string,
  sidebar: SidebarOptions,
) {
  const navJson = [];

  const getShortName = (title: string) => {
    const longTitle = title.split('.');
    return longTitle[longTitle.length - 1];
  };

  navigation.children.forEach((navigationItem) => {
    if (navigationItem.url && navigationItem.children.length === 0) {
      const urlKey = navigationItem.url.replace('.md', '');
      navJson.push([
        urlKey === 'README' ? `/${outFolder}/` : 'globals',
        navigationItem.title,
      ]);
    } else {
      navJson.push({
        title: navigationItem.title,
        children: navigationItem.children.map((navItem) => {
          return [
            getUrlKey(navItem.url),
            sidebar.fullNames ? navItem.title : getShortName(navItem.title),
          ];
        }),
      });
    }
  });
  if (sidebar.parentCategory && sidebar.parentCategory !== 'none') {
    return [{ title: sidebar.parentCategory, children: navJson }];
  }
  return navJson;
}
function getUrlKey(url: string) {
  return url.replace('.md', '');
}
