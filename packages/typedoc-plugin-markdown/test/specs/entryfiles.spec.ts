import { expectFileToEqual } from '@devtools/testing';

describe(`EntryFiles`, () => {
  test(`should get entry module`, () => {
    expectFileToEqual('entryfiles', 'members', ['README.mdx', 'index.mdx']);
  });

  test(`should get module member for members`, () => {
    expectFileToEqual(
      'entryfiles',
      'members',
      'entry-module/classes/ModuleClass.mdx',
    );
  });

  test(`should get readme file`, () => {
    expectFileToEqual('entryfiles', 'members', 'README-1.mdx', 1);
  });
});
