import * as path from 'path';

import { Application, ProjectReflection } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';

import { FrontMatterComponent } from './front-matter';
import { addOptions, getOptions } from './options';
import { render } from './render';
import { getSidebarJson } from './sidebar';
import { PluginOptions } from './types';

let app: Application;
let project: ProjectReflection | undefined;

export const typedocPlugin = (opts: PluginOptions, ctx: any) => {
  const options = getOptions(opts);

  app = new Application();

  load(app);

  app.renderer.render = render;

  addOptions(app);

  app.bootstrap({ ...options, theme: path.resolve(__dirname) });

  app.renderer.addComponent('fm', new FrontMatterComponent(app.renderer));

  project = app.convert();

  // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
  if (!project) {
    return;
  }

  const outputDirectory = ctx.sourceDir + '/' + options.out;

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
