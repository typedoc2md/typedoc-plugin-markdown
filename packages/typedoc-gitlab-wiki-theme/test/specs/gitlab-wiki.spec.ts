import * as fs from 'fs';
import * as path from 'path';
describe(`GithubWiki`, () => {
  test(`should output index docs`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/home.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should output member docs`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/default/module-1/classes/ClassA.md'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should output default sidebar`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/default/_sidebar.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should output globals sidebar`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/globals/_sidebar.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });
  test(`should output single modules sidebar`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/single-modules/_sidebar.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should not output single page sidebar`, async () => {
    const contents = fs.readdirSync(path.join(__dirname, '../out/single-page'));
    expect(contents).toMatchSnapshot();
  });
});
