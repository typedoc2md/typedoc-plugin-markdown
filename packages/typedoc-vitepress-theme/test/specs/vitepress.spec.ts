import { assertToMatchSnapshot } from '@devtools/testing';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe(`typedoc-vitepress-theme`, () => {
  it(`should output docs with vitepress theme`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/index.md'))
      .toString();
    assertToMatchSnapshot('index-page', contents);
  });

  it(`should output members that require anchor slugification`, async () => {
    const contents = fs
      .readFileSync(
        path.join(
          __dirname,
          '../out/default/module-1/interfaces/InterfaceA.md',
        ),
      )
      .toString();
    assertToMatchSnapshot('reflection-page', contents);
  });

  it(`should generate typedoc sidebar`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/typedoc-sidebar.json'))
      .toString();
    assertToMatchSnapshot('default-sidebar', contents);
  });

  it(`should generate typedoc sidebar with options`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/sidebar-options/typedoc-sidebar.json'),
      )
      .toString();
    assertToMatchSnapshot('sidebar-with-options', contents);
  });

  it(`should generate typedoc sidebar with duplicate out and docsRoots`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/sidebar-options-2/typedoc-sidebar.json'),
      )
      .toString();
    assertToMatchSnapshot('docs-root', contents);
  });
});
