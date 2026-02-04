import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Hierarchy)`, () => {
  it(`should hierarchy for members`, () => {
    expectFileToEqual('reflections', 'members', 'hierarchy.md', 1);
  });

  it(`should hierarchy for modules`, () => {
    expectFileToEqual('reflections', 'modules', 'hierarchy.md', 1);
  });
});
