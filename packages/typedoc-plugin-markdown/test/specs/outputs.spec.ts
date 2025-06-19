import { strict as assert } from 'assert';
import * as fs from 'fs';
import { expectDirToEqual, getOutDir } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Outputs)`, () => {
  it(`should output html`, () => {
    expectDirToEqual('outputs', `html/outputs`);
  });

  it(`should output md (kind)`, () => {
    expectDirToEqual('outputs', `md/outputs/kind`);
  });

  it(`should output md (kind-dir)`, () => {
    expectDirToEqual('outputs', `md/outputs/kind-dir`);
  });

  it(`should output md with anchors (kind-dir)`, () => {
    const readmeDoc = fs.existsSync(
      `${getOutDir()}/md/outputs/kind-dir/classes/ExtendedClass/index.md`,
    );
    assert.ok(readmeDoc);
  });
});
