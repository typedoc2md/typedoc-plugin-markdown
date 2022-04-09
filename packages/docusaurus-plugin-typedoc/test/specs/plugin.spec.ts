import * as fs from 'fs-extra';
import * as tmp from 'tmp';
import typedocPlugin from '../../dist/plugin';

tmp.setGracefulCleanup();

async function bootstrap(tmpobj: tmp.DirResult, customOptions = {}) {
  const options = {
    id: 'default',
    logger: 'none',
    entryPoints: ['../typedoc-plugin-markdown/test/stubs/src/theme.ts'],
    tsconfig: '../typedoc-plugin-markdown/test/stubs/tsconfig.json',
  } as any;

  const plugin = typedocPlugin(
    {
      siteDir: tmpobj.name,
      generatedFilesDir: '',
      siteConfig: {},
    } as any,
    {
      ...options,
      ...customOptions,
    },
  );
  return await plugin.loadContent();
}

describe(`Plugin:`, () => {
  describe(`(docs)`, () => {
    let tmpobj;
    beforeAll(async () => {
      tmpobj = tmp.dirSync();
      await bootstrap(tmpobj);
    });
    test(`should render`, () => {
      const files = fs.readdirSync(tmpobj.name + '/docs/api');
      expect(files.sort((a, b) => a.localeCompare(b))).toMatchSnapshot();
    });

    test(`should write doc`, () => {
      const sidebar = fs.readFileSync(tmpobj.name + '/docs/api/index.md');
      expect(sidebar.toString()).toMatchSnapshot();
    });

    test(`should write category yaml`, () => {
      const sidebar = fs.readFileSync(
        tmpobj.name + '/docs/api/classes/_category_.yml',
      );
      expect(sidebar.toString()).toMatchSnapshot();
    });
  });
});
