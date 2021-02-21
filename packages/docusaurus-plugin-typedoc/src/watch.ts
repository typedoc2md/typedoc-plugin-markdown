import * as fs from 'fs';
import * as path from 'path';

import { Application } from 'typedoc';

import { PluginOptions } from './types';

/**
 * Calls TypeDoc's `convertAndWatch` and force trigger sidebars refresh.
 */
export const convertAndWatch = (app: Application, options: PluginOptions) => {
  const sidebarsJsPath = path.resolve(options.siteDir, 'sidebars.js');
  app.convertAndWatch(async (project) => {
    if (options.sidebar) {
      // remove typedoc sidebar from require cache
      delete require.cache[options.sidebar.sidebarPath];
      // force trigger a sidebars.js refresh
      const sidebarJsContent = fs.readFileSync(sidebarsJsPath);
      fs.writeFileSync(sidebarsJsPath, sidebarJsContent);
    }
    await app.generateDocs(project, options.outputDirectory);
  });
};
