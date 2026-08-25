import { strict as assert } from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Renderer } from 'typedoc';
import { formatWithPrettierIfAvailable } from './prettier.js';

/**
 * `.editorconfig` resolution itself is covered by the `utils` fixtures, which
 * publish the same page with and without a matching section. These specs cover
 * the precedence rules that a single published output cannot express.
 */

const CONTENTS = [
  '```ts',
  'const someVeryLongVariableName = someFunction(argumentOne, argumentTwo, argumentThree);',
  '```',
  '',
].join('\n');

const EDITORCONFIG = 'root = true\n\n[*.md]\nmax_line_length = off\n';

function mockRenderer(prettierConfigFile?: string) {
  return {
    application: {
      logger: { warn: () => {}, verbose: () => {} },
      options: { getValue: () => prettierConfigFile ?? '' },
    },
  } as unknown as Renderer;
}

function mockProject(files: Record<string, string>) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tpm-prettier-'));
  Object.entries(files).forEach(([name, contents]) => {
    fs.writeFileSync(path.join(dir, name), contents);
  });
  return path.join(dir, 'doc.md');
}

describe('typedoc-plugin-markdown (Renderer / formatWithPrettierIfAvailable)', () => {
  it('should give a resolved Prettier config precedence over `.editorconfig`', async () => {
    const fileName = mockProject({
      '.editorconfig': EDITORCONFIG,
      '.prettierrc.json': JSON.stringify({ printWidth: 40 }),
    });
    const out = await formatWithPrettierIfAvailable(
      mockRenderer(),
      CONTENTS,
      fileName,
    );
    assert.ok(
      out.includes('someFunction(\n'),
      'expected `.prettierrc` to override `.editorconfig`',
    );
  });

  it('should give an explicit `prettierConfigFile` precedence over `.editorconfig`', async () => {
    const fileName = mockProject({ '.editorconfig': EDITORCONFIG });
    const configFile = path.join(path.dirname(fileName), 'custom.json');
    fs.writeFileSync(configFile, JSON.stringify({ printWidth: 40 }));
    const out = await formatWithPrettierIfAvailable(
      mockRenderer(configFile),
      CONTENTS,
      fileName,
    );
    assert.ok(
      out.includes('someFunction(\n'),
      'expected the configured file to override `.editorconfig`',
    );
  });
});
