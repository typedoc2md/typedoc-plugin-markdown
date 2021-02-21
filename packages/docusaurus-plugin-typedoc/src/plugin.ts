import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';

import { FrontMatterComponent } from './front-matter';
import { addOptions, getOptions } from './options';
import { render } from './render';
import { SidebarComponent, writeSidebar } from './sidebar';
import { PluginOptions } from './types';
import { convertAndWatch } from './watch';

// store list of plugin ids when running multiple instances
const apps: string[] = [];

export default async function pluginDocusaurus(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  if (opts.id && !apps.includes(opts.id)) {
    // add id to apps so it is intialized one time only
    apps.push(opts.id);

    // assign relevant docusaurus context
    const { siteDir } = context;

    // merge default plugin options with user options
    const options = getOptions(siteDir, opts);

    // we need to generate an empty sidebar up-front so it can be resolved from sidebars.js
    if (options.sidebar) {
      writeSidebar(options.sidebar, 'module.exports=[];');
    }

    // initialize and build app
    const app = new Application();

    // customise render
    app.renderer.render = render;

    // add plugin options
    addOptions(app);

    // bootstrap typedoc app
    app.bootstrap(options);

    // add frontmatter component to typedoc renderer
    app.renderer.addComponent('fm', new FrontMatterComponent(app.renderer));

    // add sidebar component to typedoc renderer
    if (options.sidebar) {
      app.renderer.addComponent('sidebar', new SidebarComponent(app.renderer));
    }

    // return the generated reflections
    const project = app.convert();

    // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
    if (!project) {
      return;
    }

    // generate or watch app
    if (options.watch) {
      convertAndWatch(app, options);
    } else {
      await app.generateDocs(project, options.outputDirectory);
    }
  }
  return {
    name: 'docusaurus-plugin-typedoc',
  };
}
