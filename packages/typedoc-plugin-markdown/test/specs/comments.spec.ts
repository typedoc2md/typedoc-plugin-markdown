import { expectFileToEqual } from '@devtools/testing';

describe(`Comments`, () => {
  test(`should compile comments for module`, () => {
    expectFileToEqual(
      'comments',
      ['modules', 'members'],
      ['README.md', 'README.mdx'],
    );
  });
});
