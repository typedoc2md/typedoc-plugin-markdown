import { assertToMatchSnapshot, getFileContents } from '@devtools/testing';

describe(`typedoc-plugin-frontmatter (No Frontmatter Data)`, () => {
  it(`should not write any YAML to page if no data found`, async () => {
    const contents = getFileContents('out/no-data/interfaces/SomeInterface.md');
    assertToMatchSnapshot('no-frontmatter', contents);
  });
});
