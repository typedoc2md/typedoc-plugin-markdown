import * as fs from 'fs-extra';
import * as tmp from 'tmp';
import typedocPlugin from '../../dist/plugin';

tmp.setGracefulCleanup();

async function bootstrap(tmpobj: tmp.DirResult, customOptions = {}) {
  const options = {
    id: 'default',
    // logger: 'none',
    entryPoints: ['../../stubs/src/theme.ts'],
    tsconfig: '../../stubs/tsconfig.json',
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

    test(`should write doc`, () => {
      const indexDoc = fs.readFileSync(tmpobj.name + '/docs/api/index.md');
      expect(indexDoc.toString()).toMatchSnapshot();
    });

    test(`should write category yaml`, () => {
      const categoryYaml = fs.readFileSync(
        tmpobj.name + '/docs/api/classes/_category_.yml',
      );
      expect(categoryYaml.toString()).toMatchSnapshot();
    });
  });
});
