import * as fs from 'fs-extra';
import * as tmp from 'tmp';

import { typedocPlugin } from '../../dist/plugin';

tmp.setGracefulCleanup();

const tmpobj = tmp.dirSync();

let plugin: any;

const bootstrap = async (customOptions = {}) => {
  const options = {
    inputFiles: ['../typedoc-plugin-markdown/test/stubs/src/theme.ts'],
    target: 'ESNext',
    moduleResolution: 'node',
    logger: 'none',
  } as any;
  plugin = typedocPlugin(
    { ...options, ...customOptions },
    { sourceDir: tmpobj.name },
  );
  await plugin.ready();
};

describe(`(render)`, () => {
  test(`should write docs`, async () => {
    await bootstrap();
    const files = fs.readdirSync(tmpobj.name + '/api');
    expect(files).toMatchSnapshot();
  });
});

describe(`(sidebars)`, () => {
  test(`should generate default`, async () => {
    await bootstrap();
    const enhancedFiles = await plugin.enhanceAppFiles();
    expect(enhancedFiles).toMatchSnapshot();
  });

  test(`should generate with parent category and fullNames`, async () => {
    await bootstrap({
      sidebar: { parentCategory: 'Parent Category', fullNames: true },
    });
    const enhancedFiles = await plugin.enhanceAppFiles();
    expect(enhancedFiles).toMatchSnapshot();
  });

  test(`should skip sidebar`, async () => {
    await bootstrap({ sidebar: null });
    const enhancedFiles = await plugin.enhanceAppFiles();
    expect(enhancedFiles).toBeUndefined();
  });
});
