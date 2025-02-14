import * as fs from 'fs';
import * as path from 'path';

describe(`Options:`, () => {
  beforeAll(async () => {});

  describe(`YAML`, () => {
    test(`should prepend frontmatter`, async () => {
      const pageContent = fs
        .readFileSync(
          path.join(__dirname, '../out/options/interfaces/SomeInterface.md'),
        )
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should prepend frontmatter with preserved tags`, async () => {
      const pageContent = fs
        .readFileSync(
          path.join(__dirname, '../out/options-2/interfaces/SomeInterface.md'),
        )
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should prepend frontmatter for readme page`, async () => {
      const pageContent = fs
        .readFileSync(path.join(__dirname, '../out/options-2/README.md'))
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should prepend frontmatter to index page`, async () => {
      const pageContent = fs
        .readFileSync(path.join(__dirname, '../out/options-2/globals.md'))
        .toString();
      expect(pageContent).toMatchSnapshot();
    });

    test(`should accept yaml stringify options`, async () => {
      const pageContent = fs
        .readFileSync(path.join(__dirname, '../out/options-3/README.md'))
        .toString();
      expect(pageContent).toMatchSnapshot();
    });
  });
});
