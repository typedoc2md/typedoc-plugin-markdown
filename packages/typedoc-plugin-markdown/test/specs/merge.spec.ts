import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Merge)`, () => {
  it(`should render plugin translations for a merged project`, () => {
    expectFileToEqual('merge', 'members', 'classes/ChildClassA.md');
  });
});
