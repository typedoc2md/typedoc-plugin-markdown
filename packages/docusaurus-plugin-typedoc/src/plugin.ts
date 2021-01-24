import * as fs from 'fs';
import * as path from 'path';

import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';

import { FrontMatterComponent } from './front-matter';
import { addOptions, getOptions } from './options';
import { render } from './render';
import { SidebarComponent } from './sidebar';
import { PluginOptions } from './types';

// store list of plugin ids when running multiple instances
const apps: string[] = [];

export default async function pluginDocusaurus(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  // assign relevant docusaurus context
  const { siteDir } = context;

  // merge options
  const options = getOptions(opts);

  if (!apps.includes(options.id)) {
    // we need to generate an empty sidebar up-front so it can be resolved from sidebars.js
    if (options.sidebar) {
      const sidebarPath = path.resolve(siteDir, options.sidebar.sidebarFile);
      if (!fs.existsSync(path.dirname(sidebarPath))) {
        fs.mkdirSync(path.dirname(sidebarPath));
      }
      fs.writeFileSync(sidebarPath, 'module.exports=[]');
    }

    if (!apps.includes(options.id)) {
      // prevent dev server infinately re-compiling
      apps.push(options.id);

      // initialize and build app
      const app = new Application();

      // customise render
      app.renderer.render = render;

      // add plugin options
      addOptions(app, siteDir, options);

      // bootstrap TypeDoc app
      app.bootstrap(options);

      // add frontmatter and sidebar components
      app.renderer.addComponent('fm', new FrontMatterComponent(app.renderer));
      app.renderer.addComponent('sidebar', new SidebarComponent(app.renderer));

      // return the generated reflections
      const project = app.convert();

      // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
      if (!project) {
        return;
      }

      // construct outputDirectory path
      const outputDirectory = path.resolve(
        siteDir,
        options.docsRoot,
        options.out,
      );

      // generate the static docs
      await app.generateDocs(project, outputDirectory);
    }
  }

  return {
    name: 'docusaurus-plugin-typedoc',
  };
}
