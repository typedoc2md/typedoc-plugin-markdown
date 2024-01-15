import * as fs from 'fs';
import * as path from 'path';
import typedocPlugin from '../../dist/plugin';

async function bootstrap(
  outDir: string,
  entryPoints: string[],
  customOptions = {},
) {
  const options = {
    id: outDir,
    out: outDir,
    entryPoints,
    tsconfig: ['./test/stubs/tsconfig.json'],
    readme: 'none',
    logLevel: 'Warn',
    hideGenerator: true,
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

describe(`Docusaurus:`, () => {
  describe(`Defaults`, () => {
    beforeAll(async () => {
      await bootstrap('./test/out/default', ['./test/stubs/*.ts'], {
        sidebar: { collapsed: false },
      });
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

  describe(`Global members`, () => {
    beforeAll(async () => {
      await bootstrap(
        './test/out/global-members',
        ['./test/stubs/module-1.ts'],
        {
          sidebar: { collapsed: false, pretty: true },
        },
      );
    });
    test(`should render 2`, () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/default/index.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should generate typedoc sidebar 2`, async () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/default/typedoc-sidebar.cjs'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });
  });
});
