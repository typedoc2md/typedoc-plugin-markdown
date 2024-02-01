import { expectFileToEqual } from '@devtools/testing';

describe(`EntryFiles`, () => {
  test(`should get entry module`, () => {
    expectFileToEqual('entryfiles', 'members', ['README.md', 'index.md']);
  });

  test(`should get module member for members`, () => {
    expectFileToEqual(
      'entryfiles',
      'members',
      'entry-module/classes/ModuleClass.md',
    );
  });

  test(`should get readme file`, () => {
    expectFileToEqual('entryfiles', 'members', 'readme_.md', 1);
  });
});
