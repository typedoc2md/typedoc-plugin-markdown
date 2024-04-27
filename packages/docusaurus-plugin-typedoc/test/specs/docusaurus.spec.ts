import * as fs from 'fs';
import * as path from 'path';

describe(`Docusaurus:`, () => {
  describe(`Defaults`, () => {
    test(`should render docs`, () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/default/index.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should render sidebar`, () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/default/typedoc-sidebar.cjs'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });
  });

  describe(`Global Members`, () => {
    test(`should render docs`, () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/global-members/index.mdx'))
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should render sidebar`, () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/global-members/typedoc-sidebar.cjs'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should render links`, () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/links/index.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });
  });
});
