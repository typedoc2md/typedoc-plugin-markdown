import {
  assertToMatchSnapshot,
  getDirContents,
  getFileContents,
} from '@devtools/testing';

describe(`typedoc-githubwiki-theme`, () => {
  it(`should output index docs`, async () => {
    const contents = getFileContents('out/default/Home.md');
    assertToMatchSnapshot('index-docs', contents);
  });

  it(`should output member docs`, async () => {
    const contents = getFileContents('out/default/module-1.Class.ClassA.md');
    assertToMatchSnapshot('member-docs', contents);
  });

  it(`should get default files`, async () => {
    const contents = getDirContents('out/default');
    assertToMatchSnapshot('default-files', contents);
  });

  it(`should output default sidebar`, async () => {
    const contents = getFileContents('out/default/_Sidebar.md');
    assertToMatchSnapshot('default-sidebar', contents);
  });

  it(`should output globals sidebar`, async () => {
    const contents = getFileContents('out/globals/_Sidebar.md');
    assertToMatchSnapshot('globals-sidebar', contents);
  });

  it(`should output single modules sidebar`, async () => {
    const contents = getFileContents('out/single-modules/_Sidebar.md');
    assertToMatchSnapshot('single-modules', contents);
  });

  it(`should not output single page sidebar`, async () => {
    const contents = getDirContents('out/single-page');
    assertToMatchSnapshot('single-page-sidebar', contents);
  });
});
