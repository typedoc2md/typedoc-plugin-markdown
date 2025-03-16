import { getOutDir } from '@devtools/testing';
import * as fs from 'fs';

describe(`Outputs`, () => {
  test(`should output markdown`, () => {
    const readmeDoc = fs.existsSync(`${getOutDir()}/md/outputs/README.md`);
    expect(readmeDoc).toBeTruthy();
  });

  test(`should output html`, () => {
    const readmeDoc = fs.existsSync(`${getOutDir()}/html/outputs/index.html`);
    expect(readmeDoc).toBeTruthy();
  });
});
