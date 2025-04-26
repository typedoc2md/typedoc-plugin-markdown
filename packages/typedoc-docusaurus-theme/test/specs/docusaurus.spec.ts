import * as fs from 'fs';
import * as path from 'path';
describe(`Docusaurus`, () => {
  test(`should output docs with theme`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../../docs/api/index.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should generate typedoc sidebar`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../../docs/api/typedoc-sidebar.cjs'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should generate typedoc sidebar with options`, async () => {
    const contents = fs
      .readFileSync(
        path.join(
          __dirname,
          '../../docs/folder-1/sidebar-js/typedoc-sidebar.cjs',
        ),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should generate typedoc ts sidebar`, async () => {
    const contents = fs
      .readFileSync(
        path.join(
          __dirname,
          '../../docs/folder-2/sub-folder/sidebar-ts/typedoc-sidebar.ts',
        ),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });
});
