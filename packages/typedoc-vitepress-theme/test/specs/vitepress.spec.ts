import * as fs from 'fs';
import * as path from 'path';
describe(`VitePress`, () => {
  test(`should output docs with vitepress theme`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/index.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should output members that require anchor slugification`, async () => {
    const contents = fs
      .readFileSync(
        path.join(
          __dirname,
          '../out/default/module-1/interfaces/InterfaceA.md',
        ),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should generate typedoc sidebar`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/typedoc-sidebar.json'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should generate typedoc sidebar with options`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/sidebar-options/typedoc-sidebar.json'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });
});
