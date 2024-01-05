import * as fs from 'fs';
import * as path from 'path';

describe(`Remark`, () => {
  test(`should load and parse with remark-github and prettier plugins`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });
});
