import * as fs from 'fs';
import * as path from 'path';
import typedocPlugin from '../../dist/plugin';

async function bootstrap(outDir: string, customOptions = {}) {
  const options = {
    id: 'default',
    out: outDir,
    entryPoints: ['./test/stubs/*.ts'],
    tsconfig: ['./test/stubs/tsconfig.json'],
    readme: 'none',
  };

  const plugin = typedocPlugin(
    {
      siteDir: path.join(__dirname, '..', 'out'),
      generatedFilesDir: '',
      siteConfig: {},
    },
    {
      ...options,
      ...customOptions,
    },
  );
  return await plugin;
}

describe(`Plugin:`, () => {
  describe(`Defaults`, () => {
    let tmpobj;
    beforeAll(async () => {
      await bootstrap('./test/out/default', { sidebar: { collapsed: false } });
    });
    test(`should render`, () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/default/index.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should generate typedoc sidebar`, async () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/default/typedoc-sidebar.cjs'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });
  });
});
