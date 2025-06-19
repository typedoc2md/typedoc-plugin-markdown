import {
  assertToMatchSnapshot,
  getDirContents,
  getFileContents,
} from '@devtools/testing';

describe(`typedoc-gitlab-theme`, () => {
  it(`should output index docs`, async () => {
    const contents = getFileContents('out/default/home.md');
    assertToMatchSnapshot('index-docs', contents);
  });

  it(`should output member docs`, async () => {
    const contents = getFileContents('out/default/module-1/classes/ClassA.md');
    assertToMatchSnapshot('member-docs', contents);
  });

  it(`should output default sidebar`, async () => {
    const contents = getFileContents('out/default/_sidebar.md');
    assertToMatchSnapshot('default-sidebar', contents);
  });

  it(`should output globals sidebar`, async () => {
    const contents = getFileContents('out/globals/_sidebar.md');
    assertToMatchSnapshot('globals-docs', contents);
  });

  it(`should output single modules sidebar`, async () => {
    const contents = getFileContents('out/single-modules/_sidebar.md');
    assertToMatchSnapshot('modules-sidebar', contents);
  });

  it(`should not output single page sidebar`, async () => {
    const contents = getDirContents('out/single-page');
    assertToMatchSnapshot('single-page-sidebar', contents);
  });
});
