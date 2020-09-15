import { LoadContext, PluginContentLoadedActions } from '@docusaurus/types';
import * as fs from 'fs-extra';
import * as tmp from 'tmp';

import plugin from '../../dist';

tmp.setGracefulCleanup();

const loadContent = async (additionalOptions = {}) => {
  const options = {
    inputFiles: ['../typedoc-plugin-markdown/test/stubs/src/theme.ts'],
    target: 'ESNext',
    moduleResolution: 'node',
    logger: 'none',
  };
  const tmpobj = tmp.dirSync();
  const context = { siteDir: tmpobj.name } as LoadContext;
  const content = await plugin(context, {
    ...options,
    ...additionalOptions,
  }).loadContent();
  return { content, context, tmpobj, options };
};

const contentLoaded = (context, content, options) => {
  plugin(context, options).contentLoaded({
    content,
    actions: {} as PluginContentLoadedActions,
  });
};

describe(`Plugin:`, () => {
  describe(`(render)`, () => {
    test(`should write docs`, async () => {
      const { content, tmpobj } = await loadContent();
      const files = fs.readdirSync(tmpobj.name + '/docs/api');
      expect(files).toMatchSnapshot();
      content.app.renderer.theme = undefined;
    });
  });

  describe(`(options)`, () => {
    test(`should set default plugin to 'typedoc-plugin-markdown'`, async () => {
      const { content } = await loadContent();
      expect(content.app.options.getValue('plugin')).toMatchSnapshot();
      content.app.renderer.theme = undefined;
    });
    test(`should merge another plugin`, async () => {
      const { content } = await loadContent({
        plugin: ['typedoc-test-plugin-1', 'typedoc-test-plugin-2'],
      });
      expect(content.app.options.getValue('plugin')).toMatchSnapshot();
      content.app.renderer.theme = undefined;
    });
    test(`should not duplicate markdown plugin`, async () => {
      const { content } = await loadContent({
        plugin: ['typedoc-test-plugin', 'typedoc-plugin-markdown'],
      });
      expect(content.app.options.getValue('plugin')).toMatchSnapshot();
      content.app.renderer.theme = undefined;
    });
  });

  describe(`(sidebars)`, () => {
    test(`should update sidebars.js'`, async () => {
      const { content, context, tmpobj, options } = await loadContent();
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
      contentLoaded(context, content, options);
      const sidebars = fs.readFileSync(tmpobj.name + '/sidebars.js');
      expect(sidebars.toString()).toMatchSnapshot();
      content.app.renderer.theme = undefined;
    });
  });
});
