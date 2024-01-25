import { expectFileToEqual } from '@devtools/testing';

describe(`EntryFiles`, () => {
  test(`should get entry module`, () => {
    expectFileToEqual('entryfiles', 'members', ['README.md', 'index.md']);
  });

  test(`should get readme file`, () => {
    expectFileToEqual('entryfiles', 'members', 'readme_.md', 1);
  });
});
