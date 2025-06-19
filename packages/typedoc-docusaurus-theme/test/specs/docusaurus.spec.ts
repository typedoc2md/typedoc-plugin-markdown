import { assertToMatchSnapshot, getFileContents } from '@devtools/testing';
describe(`typedoc-docusaurus-theme`, () => {
  it(`should output docs with theme`, async () => {
    const contents = getFileContents('../docs/api/index.md');
    assertToMatchSnapshot('index', contents);
  });

  it(`should generate typedoc sidebar`, async () => {
    const contents = getFileContents('../docs/api/typedoc-sidebar.cjs');
    assertToMatchSnapshot('sidebar-default', contents);
  });

  it(`should generate typedoc sidebar with options`, async () => {
    const contents = getFileContents(
      '../docs/folder-1/sidebar-js/typedoc-sidebar.cjs',
    );
    assertToMatchSnapshot('sidebar-with-options', contents);
  });

  it(`should generate typedoc ts sidebar`, async () => {
    const contents = getFileContents(
      '../docs/folder-2/sub-folder/sidebar-ts/typedoc-sidebar.ts',
    );
    assertToMatchSnapshot('sidebar-typescript', contents);
  });
});
