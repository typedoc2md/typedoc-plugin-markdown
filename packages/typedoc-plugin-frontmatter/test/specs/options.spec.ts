import { assertToMatchSnapshot, getFileContents } from '@devtools/testing';

describe(`typedoc-plugin-frontmatter (Options)`, () => {
  describe(`YAML`, () => {
    it(`should prepend frontmatter`, async () => {
      const pageContent = getFileContents(
        'out/options/interfaces/SomeInterface.md',
      );
      assertToMatchSnapshot('yaml-append-frontmatter', pageContent);
    });

    it(`should prepend frontmatter to signatures`, async () => {
      const pageContent = getFileContents(
        'out/options/functions/someFunction.md',
      );
      assertToMatchSnapshot('yaml-append-function-frontmatter', pageContent);
    });

    it(`should prepend frontmatter to multiple signatures`, async () => {
      const pageContent = getFileContents(
        'out/options/functions/someFunctionWithMultipleSignatures.md',
      );
      assertToMatchSnapshot(
        'yaml-append-function-multiple-signatures-frontmatter',
        pageContent,
      );
    });

    it(`should prepend frontmatter with preserved tags`, async () => {
      const pageContent = getFileContents(
        'out/options-2/interfaces/SomeInterface.md',
      );
      assertToMatchSnapshot('yaml-prepend-preserve-tags', pageContent);
    });

    it(`should add custom tags to functions`, async () => {
      const pageContent = getFileContents(
        'out/options-2/functions/someFunction.md',
      );
      assertToMatchSnapshot('yaml-function-tags', pageContent);
    });

    it(`should add custom tags to functions with multiple signatures`, async () => {
      const pageContent = getFileContents(
        'out/options-2/functions/someFunctionWithMultipleSignatures.md',
      );
      assertToMatchSnapshot(
        'yaml-function-multiple-signatures-tags',
        pageContent,
      );
    });

    it(`should prepend frontmatter for readme page`, async () => {
      const pageContent = getFileContents('out/options-2/README.md');
      assertToMatchSnapshot('yaml-readme-page', pageContent);
    });

    it(`should prepend frontmatter to index page`, async () => {
      const pageContent = getFileContents('out/options-2/globals.md');
      assertToMatchSnapshot('yaml-index-page', pageContent);
    });

    it(`should accept yaml stringify options`, async () => {
      const pageContent = getFileContents('out/options-3/README.md');
      assertToMatchSnapshot('yaml-stringify-options', pageContent);
    });
  });
});
