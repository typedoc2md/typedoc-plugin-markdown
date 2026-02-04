import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Links)`, () => {
  it(`should get links for extended members`, () => {
    expectFileToEqual('links', 'modules', 'extended.md');
  });

  it(`should get links for inherited members`, () => {
    expectFileToEqual('links', 'modules', 'inherited.md');
  });

  it(`should get links for unique anchors`, () => {
    expectFileToEqual('links', 'modules', 'unique-anchors.md');
  });
});
