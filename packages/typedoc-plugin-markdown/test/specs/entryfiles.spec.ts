import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Entry Files)`, () => {
  it(`should get entry module`, () => {
    expectFileToEqual('entryfiles', 'members', ['README.mdx', 'index.mdx']);
  });

  it(`should get module member for members`, () => {
    expectFileToEqual(
      'entryfiles',
      'members',
      'entry-module/classes/ModuleClass.mdx',
    );
  });

  it(`should get readme file`, () => {
    expectFileToEqual('entryfiles', 'members', 'README-1.mdx', 1);
  });
});
