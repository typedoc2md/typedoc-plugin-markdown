import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Reflection Indexes)`, () => {
  it(`should compile reflection indexes`, () => {
    expectFileToEqual('reflections', 'members', ['globals.md', 'README.md']);
  });
  it(`should compile reflection indexes for modules`, () => {
    expectFileToEqual(
      'reflections',
      'modules',
      ['globals.md', 'README.md'],
      2,
      [1, 10],
    );
  });
});
