import { strict as assert } from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import ts from 'typescript';

/**
 * Snapshots only assert that output is unchanged, so invalid TypeScript in a
 * `ts` code block stays green for as long as it stays the same (#940 went
 * unnoticed from 4.0 to 4.14). This parses every `ts` block the fixtures
 * render and fails on syntax errors.
 *
 * Only syntax is checked: names in the blocks are not resolved, and output
 * outside `ts` blocks (tables, inline signatures) is not covered.
 */

const OUT_DIR = path.join(process.cwd(), 'test', 'fixtures', 'out', 'md');

/**
 * Blocks known to be invalid. Each entry must still match at least one invalid
 * block, so fixing the cause fails the spec until the entry is removed.
 */
const KNOWN_INVALID: { file: RegExp; code?: RegExp; reason: string }[] = [
  {
    file: /^comments\//,
    code: /^def /,
    reason: 'A doc comment example tagged `ts` that is not TypeScript.',
  },
];

// A block may be a whole declaration or a member fragment, so it is valid if
// it parses in any one of these contexts.
const CONTEXTS = [
  (code: string) => code,
  (code: string) => `declare class __Context {\n${code}\n}`,
  (code: string) => `interface __Context {\n${code}\n}`,
  (code: string) => `type __Context = ${code}`,
];

describe(`typedoc-plugin-markdown (Integration / Code blocks)`, () => {
  const blocks = getCodeBlocks(OUT_DIR);
  const invalid = blocks.filter((block) => !isValid(block.code));

  it(`should render ts code blocks`, () => {
    assert.ok(blocks.length > 0, `No ts code blocks found in ${OUT_DIR}`);
  });

  it(`should render valid TypeScript in ts code blocks`, () => {
    const unexpected = invalid.filter(
      (block) => !KNOWN_INVALID.some((entry) => matches(entry, block)),
    );
    assert.deepStrictEqual(
      unexpected.map(
        (block) => `${block.file}: ${getErrors(block.code)[0]}\n${block.code}`,
      ),
      [],
    );
  });

  it(`should not list known invalid blocks that are now valid`, () => {
    const stale = KNOWN_INVALID.filter(
      (entry) => !invalid.some((block) => matches(entry, block)),
    );
    assert.deepStrictEqual(
      stale.map((entry) => entry.reason),
      [],
    );
  });
});

function getCodeBlocks(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return getFiles(dir)
    .filter((file) => file.endsWith('.md'))
    .flatMap((file) => {
      const contents = fs.readFileSync(path.join(dir, file), 'utf8');
      return [...contents.matchAll(/^```ts\n([\s\S]*?)^```$/gm)].map(
        (match) => ({ file, code: match[1].trimEnd() }),
      );
    });
}

function getFiles(dir: string, base = dir): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory()
      ? getFiles(fullPath, base)
      : [path.relative(base, fullPath).split(path.sep).join('/')];
  });
}

function isValid(code: string) {
  // Class constructors follow TypeDoc's `new ClassName(): ClassName`
  // convention, which is a construct signature with the class name added.
  const candidate = code.replace(/^new [\w$]+/, 'new ');
  return CONTEXTS.some((context) => !getErrors(context(candidate)).length);
}

function getErrors(code: string) {
  const { diagnostics = [] } = ts.transpileModule(code, {
    reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ESNext },
  });
  return diagnostics.map((diagnostic) =>
    ts.flattenDiagnosticMessageText(diagnostic.messageText, ' '),
  );
}

function matches(
  entry: (typeof KNOWN_INVALID)[number],
  block: { file: string; code: string },
) {
  return (
    entry.file.test(block.file) && (!entry.code || entry.code.test(block.code))
  );
}
