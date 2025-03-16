import { expectFileToEqual } from '@devtools/testing';

describe(`Reflection Indexes`, () => {
  test(`should compile reflection indexes`, () => {
    expectFileToEqual('reflections', 'members', ['globals.md', 'README.md']);
  });
  test(`should compile reflection indexes for modules`, () => {
    expectFileToEqual(
      'reflections',
      'modules',
      ['globals.md', 'README.md'],
      2,
      [1, 10],
    );
  });
});
