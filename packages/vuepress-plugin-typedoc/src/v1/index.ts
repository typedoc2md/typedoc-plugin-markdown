import * as path from 'path';

import { Application, ProjectReflection } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import {
  addOptions,
  getSidebarOptions,
  getTypedocOptions,
} from '../shared/options';
import { removeDir, render } from '../shared/render';

import { PluginOptions } from '../shared/types';
import { getSidebarJson } from './sidebar';

let app: Application;
let project: ProjectReflection | undefined;

export = (opts: Partial<PluginOptions>, ctx: any) => {
  const typedocOptions = getTypedocOptions(opts);

  const outputDirectory = ctx.sourceDir + '/' + typedocOptions.out;

  if (typedocOptions.cleanOutputDir) {
    removeDir(outputDirectory);
  }

  app = new Application();

  load(app);

  addOptions(app);

  app.renderer.render = render;

  app.bootstrap(typedocOptions);

  project = app.convert();

  // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
  if (!project) {
    return;
  }

  if (typedocOptions.watch) {
    app.convertAndWatch(async (project) => {
      app.generateDocs(project, outputDirectory);
    });
  } else {
    app.generateDocs(project, outputDirectory);
  }

  return {
    name: 'vuepress-plugin-typedoc',

    async enhanceAppFiles() {
      const sidebarOptions = getSidebarOptions(opts);
      if (!sidebarOptions.autoConfiguration) {
        return;
      }

      const theme = app.renderer.theme as any;
      const navigation = theme.getNavigation(project);

      const sidebarJson = JSON.stringify({
        [`/${path.relative(process.cwd(), typedocOptions.out as string)}/`]:
          getSidebarJson(
            navigation,
            sidebarOptions,
            typedocOptions.out as string,
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
