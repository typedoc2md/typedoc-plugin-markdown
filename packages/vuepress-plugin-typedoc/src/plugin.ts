import * as path from 'path';

import { Application, ProjectReflection } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import { removeDir, render } from './render';
import { addOptions, getOptions } from './options';

import { getSidebarJson } from './sidebar';
import { PluginOptions } from './types';

let app: Application;
let project: ProjectReflection | undefined;

export const typedocPlugin = (opts: PluginOptions, ctx: any) => {
  const options = getOptions(opts);

  const outputDirectory = (ctx.sourceDir || ctx.dir.source()) + '/' + options.out;

  removeDir(outputDirectory);

  app = new Application();

  app.renderer.render = render;

  load(app);

  addOptions(app);

  app.bootstrap({ ...options, theme: path.resolve(__dirname) });

  project = app.convert();

  // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
  if (!project) {
    return;
  }

  if (options.watch) {
    app.convertAndWatch(async (project) => {
      app.generateDocs(project, outputDirectory);
    });
  } else {
    app.generateDocs(project, outputDirectory);
  }

  return {
    name: 'vuepress-plugin-typedoc',

    async enhanceAppFiles() {
      if (!options.sidebar) {
        return;
      }
      const theme = app.renderer.theme as any;
      const navigation = theme.getNavigation(project);

      const sidebarJson = JSON.stringify({
        [`/${path.relative(process.cwd(), options.out)}/`]: getSidebarJson(
          navigation,
          options,
        ),
      });
      return {
        name: 'typedoc-sidebar',
        content: `export default ({ siteData, options }) => {
          siteData.themeConfig.sidebarDepth = 0;
          siteData.themeConfig.sidebar = Object.assign({},siteData.themeConfig.sidebar,${sidebarJson});
        }`,
      };
    },
  };
};
