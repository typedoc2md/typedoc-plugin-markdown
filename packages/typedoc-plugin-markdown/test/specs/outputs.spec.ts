import { expectDirToEqual, getOutDir } from '@devtools/testing';
import * as fs from 'fs';

describe(`Outputs`, () => {
  test(`should output html`, () => {
    expectDirToEqual(`html/outputs`);
  });

  test(`should output md (kind)`, () => {
    expectDirToEqual(`md/outputs/kind`);
  });

  test(`should output md (kind-dir)`, () => {
    expectDirToEqual(`md/outputs/kind-dir`);
  });

  test(`should output md with anchors (kind-dir)`, () => {
    const readmeDoc = fs.existsSync(
      `${getOutDir()}/md/outputs/kind-dir/classes/ExtendedClass/index.md`,
    );
    expect(readmeDoc).toBeTruthy();
  });
});
