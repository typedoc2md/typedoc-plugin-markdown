import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Locales)`, () => {
  it(`should render interface translations for each locale`, () => {
    expectFileToEqual('locales', 'members', 'type-aliases/SomeType.md');
  });
});
