import {
  Application,
  ProjectReflection,
  TSConfigReader,
  TypeDocOptions,
  TypeDocReader,
} from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter';
import { getSidebarJson } from './sidebar';
import { PluginOptions } from './types';

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
  const sourceDir = ctx.sourceDir;

  const options = { ...DEFAULT_PLUGIN_OPTIONS, ...opts };

  const outFolder = options.out ? options.out : 'api';
  const out = sourceDir + '/' + outFolder;
  const sidebar = options.sidebar;

  let project: ProjectReflection | undefined;

  // don't re-compile on dev server

  return {
    name: 'vuepress-plugin-typedoc',
    async ready() {
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
        hideInPageTOC: true,
        hideBreadcrumbs: true,
        // TypeDoc plugins
        plugin: [
          ...['typedoc-plugin-markdown'],
          ...(opts.plugin
            ? opts.plugin.filter((name) => name !== 'typedoc-plugin-markdown')
            : []),
        ],
      } as Partial<TypeDocOptions>);

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

      await app.generateDocs(project, out);

      return;
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
