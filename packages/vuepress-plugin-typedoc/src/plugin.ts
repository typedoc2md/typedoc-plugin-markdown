import { Application, ProjectReflection } from 'typedoc';

import { FrontMatterComponent } from './front-matter';
import { addOptions, getOptions } from './options';
import { getSidebarJson } from './sidebar';
import { PluginOptions } from './types';

let app: Application;
let project: ProjectReflection | undefined;
const done = false;

export const typedocPlugin = (opts: PluginOptions, ctx: any) => {
  // merge default plugin options with user options
  const options = getOptions(opts);

  return {
    name: 'vuepress-plugin-typedoc',
    async ready() {
      if (!done) {
        app = new Application();

        const sourceDir = ctx.sourceDir;
        const outputDirectory = sourceDir + '/' + options.out;

        // add plugin options
        addOptions(app);

        // bootstrap typedoc app
        app.bootstrap(options);

        // add frontmatter component to typedoc renderer
        app.renderer.addComponent('fm', new FrontMatterComponent(app.renderer));

        // add sidebar component to typedoc renderer
        /*if (options.sidebar) {
          app.renderer.addComponent(
            'sidebar',
            new SidebarComponent(app.renderer),
          );
        }*/

        project = app.convert();

        // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
        if (!project) {
          return;
        }

        // generate docs
        await app.generateDocs(project, outputDirectory);

        // watch pp
        if (options.watch) {
          app.convertAndWatch(async (project) => {
            await app.generateDocs(project, outputDirectory);
          });
        }
      }
    },
    async enhanceAppFiles() {
      if (done || !options.sidebar) {
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
              [`/${options.out}/`]: getSidebarJson(
                navigation,
                options.out,
                options.sidebar,
              ),
            },
          )});
        }`,
      };
    },
  };
};
