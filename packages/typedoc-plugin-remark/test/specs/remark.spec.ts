import * as fs from 'fs';
import * as path from 'path';

describe(`Remark`, () => {
  describe(`Simple`, () => {
    test(`should parse modules page`, async () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/md/simple/modules.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });
    test(`should parse documents page`, async () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/md/simple/documents/toc-doc.md'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });
  });

  describe(`Conditional`, () => {
    test(`should parse README page kind`, async () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/md/conditional/README.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should parse Index page kind`, async () => {
      const contents = fs
        .readFileSync(path.join(__dirname, '../out/md/conditional/modules.md'))
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should parse documents page`, async () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/md/simple/documents/toc-doc.md'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should parse class page`, async () => {
      const contents = fs
        .readFileSync(
          path.join(__dirname, '../out/md/simple/remark/classes/Class.md'),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });

    test(`should parse interface page`, async () => {
      const contents = fs
        .readFileSync(
          path.join(
            __dirname,
            '../out/md/simple/remark/interfaces/Interface.md',
          ),
        )
        .toString();
      expect(contents).toMatchSnapshot();
    });
  });
});
