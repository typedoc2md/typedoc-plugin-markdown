import * as fs from 'fs-extra';
import * as tmp from 'tmp';

import { typedocPlugin } from '../../dist/plugin';

tmp.setGracefulCleanup();

function bootstrap(tmpobj: tmp.DirResult, customOptions = {}) {
  const options = {
    id: 'default',
    logger: 'none',
    entryPoints: ['../typedoc-plugin-markdown/test/stubs/src/theme.ts'],
    tsconfig: '../typedoc-plugin-markdown/test/stubs/tsconfig.json',
  } as any;

  const plugin = typedocPlugin(
    { ...options, ...customOptions },
    { sourceDir: tmpobj.name },
  );
  return plugin;
}

describe(`(render)`, () => {
  let tmpobj;
  beforeAll(async () => {
    tmpobj = tmp.dirSync();
    bootstrap(tmpobj);
  });
  test(`should write docs`, async () => {
    const files = fs.readdirSync(tmpobj.name + '/api');
    expect(files).toMatchSnapshot();
  });
  test(`should write doc`, () => {
    const sidebar = fs.readFileSync(tmpobj.name + '/api/README.md');
    expect(sidebar.toString()).toMatchSnapshot();
  });
});

describe(`(sidebars)`, () => {
  let tmpobj;
  beforeAll(async () => {
    tmpobj = tmp.dirSync();
    bootstrap(tmpobj);
  });
  test(`should generate default`, async () => {
    const plugin = bootstrap(tmpobj, { sidebar: { parentCategory: 'none' } });
    const enhancedFiles = await plugin.enhanceAppFiles();
    expect(enhancedFiles).toMatchSnapshot();
  });

  test(`should generate with parent category and fullNames`, async () => {
    const plugin = bootstrap(tmpobj, {
      sidebar: { fullNames: true },
    });
    const enhancedFiles = await plugin.enhanceAppFiles();
    expect(enhancedFiles).toMatchSnapshot();
  });

  test(`should skip sidebar`, async () => {
    const plugin = bootstrap(tmpobj, { sidebar: null });
    const enhancedFiles = await plugin.enhanceAppFiles();
    expect(enhancedFiles).toBeUndefined();
  });
});
