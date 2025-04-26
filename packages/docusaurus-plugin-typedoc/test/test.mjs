import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = path.join(
  __dirname,
  '../../../devtools/examples/docusaurus-ts',
);

await assertFilesExist([
  'docs/api/index.md',
  'docs/api/typedoc-sidebar.cjs',
  'docs/api-2/index.md',
  'docs/api-2/typedoc-sidebar.ts',
  'docs/api-2/custom-plugin.txt',
]);

async function assertFilesExist(paths) {
  for (const file of paths) {
    const fullPath = path.join(baseDir, file);
    const exists = fs.existsSync(fullPath);
    const assertMessage = `Expected file to exist:`;
    assert.ok(exists, `${assertMessage}: ${fullPath}`);
    console.log(`${assertMessage}:`, file);
  }
}
