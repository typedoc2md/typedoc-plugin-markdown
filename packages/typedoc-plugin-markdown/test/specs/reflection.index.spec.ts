import { expectFileToEqual } from '@devtools/testing';

describe(`Reflection Indexes`, () => {
  test(`should compile reflection indexes`, () => {
    expectFileToEqual('reflections', 'members', 'README.md');
  });
});