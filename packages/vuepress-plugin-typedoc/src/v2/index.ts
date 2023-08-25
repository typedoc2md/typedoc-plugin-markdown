import * as fs from 'fs';
import * as path from 'path';
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

    return {
      name: 'vuepress-plugin-typedoc',

      onInitialized: async () => {
        if (typedocOptions.cleanOutputDir) {
          removeDir(outputDirectory);
        }

        app = await Application.bootstrapWithPlugins();

        load(app);

        addOptions(app);

        app.renderer.render = render;

        setOptions(app, typedocOptions);

        app.renderer.defineTheme('vuepress', VuepressTheme);

        project = await app.convert();

        // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
        if (!project) {
          return;
        }

        if (typedocOptions.watch) {
          app.convertAndWatch(async (project) => {
            await app.generateDocs(project, outputDirectory);
          });
        } else {
          await app.generateDocs(project, outputDirectory);
        }

        const sidebarOptions = getSidebarOptions(opts);
        if (!sidebarOptions.autoConfiguration) {
          return;
        }

        if (sidebarOptions.autoConfiguration) {
          const theme = app.renderer.theme as any;
          const navigation = theme.getNavigation(project);
          const sidebarPath = path.resolve(
            outputDirectory,
            'typedoc-sidebar.json',
          );
          const sidebarJson = getSidebarJson(
            navigation,
            sidebarOptions,
            typedocOptions.out as string,
          );
          fs.writeFileSync(sidebarPath, JSON.stringify(sidebarJson));
        }
      },
    };
  };
};

function setOptions(app: Application, options: any, reportErrors = true) {
  for (const [key, val] of Object.entries(options)) {
    app.options.setValue(key as never, val as never);
  }
}
