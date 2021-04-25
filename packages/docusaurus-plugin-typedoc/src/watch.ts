import * as fs from 'fs';
import * as path from 'path';

import { Application } from 'typedoc';

import { getOutputDirectory } from './options';
import { getSidebarPath } from './sidebar';
import { PluginOptions } from './types';

/**
 * Calls TypeDoc's `convertAndWatch` and force trigger sidebars refresh.
 */
export const convertAndWatch = (app: Application, options: PluginOptions) => {
  const sidebarsJsPath = path.resolve(options.siteDir, 'sidebars.js');
  const sidebarPath = getSidebarPath(options);
  app.convertAndWatch(async (project) => {
    if (sidebarPath) {
      // remove typedoc sidebar from require cache
      delete require.cache[sidebarPath];
      // force trigger a sidebars.js refresh
      const sidebarJsContent = fs.readFileSync(sidebarsJsPath);
      fs.writeFileSync(sidebarsJsPath, sidebarJsContent);
    }
    await app.generateDocs(project, getOutputDirectory(options));
  });
};
