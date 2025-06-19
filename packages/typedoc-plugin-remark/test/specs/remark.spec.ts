import { assertToMatchSnapshot, getFileContents } from '@devtools/testing';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe(`typedoc-plugin-remark`, () => {
  describe(`Simple`, () => {
    it(`should parse modules page`, async () => {
      const contents = getFileContents('out/md/simple/modules.md');
      assertToMatchSnapshot('simple-modules-page', contents);
    });

    it(`should parse documents page`, async () => {
      const contents = getFileContents('out/md/simple/documents/toc-doc.md');
      assertToMatchSnapshot('simple-documents-page', contents);
    });
  });

  describe(`Conditional`, () => {
    it(`should parse README page kind`, async () => {
      const contents = getFileContents('out/md/conditional/README.md');
      assertToMatchSnapshot('conditional-readme-page', contents);
    });

    it(`should parse Index page kind`, async () => {
      const contents = getFileContents('out/md/conditional/modules.md');
      assertToMatchSnapshot('conditional-index-page', contents);
    });

    it(`should parse documents page`, async () => {
      const contents = getFileContents('out/md/simple/documents/toc-doc.md');
      assertToMatchSnapshot('conditional-documents-page', contents);
    });

    it(`should parse class page`, async () => {
      const contents = getFileContents('out/md/simple/remark/classes/Class.md');
      assertToMatchSnapshot('conditional-class-page', contents);
    });

    it(`should parse interface page`, async () => {
      const contents = getFileContents(
        'out/md/simple/remark/interfaces/Interface.md',
      );
      assertToMatchSnapshot('conditional-interface-page', contents);
    });
  });
});
