import * as fs from 'fs';
import * as path from 'path';

describe(`No Frontmatter Data`, () => {
  test(`should not write any YAML to page if no data found`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/no-data/interfaces/SomeInterface.md'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });
});
