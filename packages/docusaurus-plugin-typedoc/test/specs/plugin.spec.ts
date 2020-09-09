import { LoadContext, PluginContentLoadedActions } from '@docusaurus/types';
import * as fs from 'fs-extra';
import * as tmp from 'tmp';

import plugin from '../../dist';

tmp.setGracefulCleanup();

const tmpobj = tmp.dirSync();

const bootstrap = (context, content, options) => {
  plugin(context, options).contentLoaded({
    content,
    actions: {} as PluginContentLoadedActions,
  });
};

describe(`Plugin:`, () => {
  let options: any;
  let content: any;
  let context: any;

  beforeAll(async () => {
    options = {
      inputFiles: ['../typedoc-plugin-markdown/test/stubs/src/theme.ts'],
      target: 'ESNext',
      moduleResolution: 'node',
      logger: 'none',
    };
    context = { siteDir: tmpobj.name } as LoadContext;
    content = await plugin(context, options).loadContent();
  });

  describe(`(render)`, () => {
    test(`should write docs`, () => {
      bootstrap(context, content, options);
      const files = fs.readdirSync(tmpobj.name + '/docs/api');
      expect(files).toMatchSnapshot();
    });
  });

  describe(`(sidebars)`, () => {
    test(`should generate sidebars.js'`, () => {
      bootstrap(context, content, options);
      const sidebars = fs.readFileSync(tmpobj.name + '/sidebars.js');
      expect(sidebars.toString()).toMatchSnapshot();
    });

    test(`should update sidebars.js'`, () => {
      const sidebarsContent = `module.exports = {
      "someSidebar": {
        "Docusaurus": [
          "doc1",
        ],
        "Features": [
          "mdx"
        ]
      }
    };`;
      fs.writeFileSync(tmpobj.name + '/sidebars.js', sidebarsContent);
      bootstrap(context, content, options);
      const sidebars = fs.readFileSync(tmpobj.name + '/sidebars.js');
      expect(sidebars.toString()).toMatchSnapshot();
    });
  });
});
