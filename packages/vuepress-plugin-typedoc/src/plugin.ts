import * as path from 'path';

import {
  Application,
  NavigationItem,
  ProjectReflection,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';

import { PluginOptions, SidebarOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  out: 'api',
  sidebar: {
    parentCategory: 'none',
    fullNames: false,
  },
};

const app = new Application();
let done = false;

export const typedocPlugin = (opts: PluginOptions, ctx: any) => {
  let project: ProjectReflection | undefined;
  const sourceDir = ctx.sourceDir;

  const options = { ...DEFAULT_PLUGIN_OPTIONS, ...opts };

  const outFolder = options.out ? options.out : 'api';
  const out = sourceDir + '/' + outFolder;
  const sidebar = options.sidebar;

  return {
    name: 'vuepress-plugin-typedoc',

    async ready() {
      // don't re-compile on dev server
      if (done) {
        return;
      }

      // TypeDoc options
      const vuepressOptions = Object.keys(options).reduce((option, key) => {
        if (
          ![...['id'], ...Object.keys(DEFAULT_PLUGIN_OPTIONS)].includes(key)
        ) {
          option[key] = options[key];
        }
        return option;
      }, {});

      app.options.addReader(new TypeDocReader());
      app.options.addReader(new TSConfigReader());

      // bootstrap
      app.bootstrap({
        // filtered vuepress options
        ...vuepressOptions,

        // TypeDoc plugins
        plugin: [
          ...['typedoc-plugin-markdown'],
          ...(opts.plugin
            ? opts.plugin.filter((name) => name !== 'typedoc-plugin-markdown')
            : []),
        ],
        theme: path.resolve(__dirname, 'theme'),
      });

      app.renderer.addComponent(
        'frontmatter',
        new FrontMatterComponent(app.renderer),
      );

      project = app.convert();

      // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
      if (!project) {
        done = true;
        return;
      }

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
          siteData.themeConfig.sidebarDepth = 2;
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
  const navJson: any[] = [];

  const getShortName = (title: string) => {
    const longTitle = title.split('.');
    return longTitle[longTitle.length - 1];
  };

  navigation.children?.forEach((navigationItem) => {
    if (navigationItem.url && navigationItem.children?.length === 0) {
      const urlKey = navigationItem.url.replace('.md', '');
      navJson.push([
        urlKey === 'README' ? `/${outFolder}/` : 'modules',
        navigationItem.title,
      ]);
    } else {
      navJson.push({
        title: navigationItem.title,
        children: navigationItem.children?.map((navItem) => {
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
