import { assertFileExists } from '@devtools/testing';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

describe(`docusaurus-plugin-typedoc`, () => {
  it(`should output index pages`, async () => {
    assertFileExists('out/api-1/index.md');
    assertFileExists('out/api-2/index.md');
  });

  it(`should output sidebars`, async () => {
    assertFileExists('out/api-1/typedoc-sidebar.cjs');
    assertFileExists('out/api-2/typedoc-sidebar.ts');
  });
});
