import { Application, ProjectReflection } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import {
  addOptions,
  getSidebarOptions,
  getTypedocOptions,
} from '../shared/options';
import { removeDir, render } from '../shared/render';
import { VuepressTheme } from '../shared/theme';
import { PluginOptions } from '../shared/types';
import { getSidebarJson } from './sidebar';

let app: Application;
let project: ProjectReflection | undefined;

export const typedocPlugin = (opts: Partial<PluginOptions>) => {
  return (ctx: any) => {
    const typedocOptions = getTypedocOptions(opts);

    const outputDirectory = ctx.dir.source() + '/' + typedocOptions.out;

    if (typedocOptions.cleanOutputDir) {
      removeDir(outputDirectory);
    }

    app = new Application();

    load(app);

    addOptions(app);

    app.renderer.render = render;

    app.renderer.defineTheme('vuepress', VuepressTheme);

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

      extendsPageOptions: (pageOptions: any) => {
        const sidebarOptions = getSidebarOptions(opts);
        if (!sidebarOptions.autoConfiguration) {
          return;
        }
        if (pageOptions.filePath?.startsWith(outputDirectory)) {
          const theme = app.renderer.theme as any;
          const navigation = theme.getNavigation(project);
          const sidebarJson = getSidebarJson(
            navigation,
            sidebarOptions,
            typedocOptions.out as string,
          );
          pageOptions.frontmatter = {
            sidebar: sidebarJson,
          };
        }
      },
    };
  };
};
