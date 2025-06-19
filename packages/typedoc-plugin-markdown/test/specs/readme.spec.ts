import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Readmes)`, () => {
  it(`should get merged readme for members`, () => {
    expectFileToEqual('readme', 'members', ['index.md']);
  });

  it(`should get merged readme for modules`, () => {
    expectFileToEqual('readme', 'modules', ['index.md']);
  });
});
