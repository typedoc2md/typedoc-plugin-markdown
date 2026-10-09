import { strict as assert } from 'assert';
import { unEscapeChars } from './un-escape-chars.js';

describe('typedoc-plugin-markdown (Utils / unEscapeChars)', () => {
  it('should unescape characters correctly', () => {
    const input = '\\*\\<\\>\\_\\{\\}\\`\\*\\|\\]\\[';
    const expectedOutput = '*<>_{}`*|][';
    const result = unEscapeChars(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle string without escaped characters', () => {
    const input = 'This is a string without escaped characters';
    const expectedOutput = 'This is a string without escaped characters';
    const result = unEscapeChars(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should keep code span content verbatim', () => {
    assert.strictEqual(
      unEscapeChars('**LinkLike** = `"[a](b)"` \\| `"&lt;b&gt;"` \\| `"a*b"`'),
      'LinkLike = "[a](b)" | "&lt;b&gt;" | "a*b"',
    );
  });

  it('should reduce links to their text', () => {
    assert.strictEqual(
      unEscapeChars('[`Foo`](Foo.md)\\<`string`\\>'),
      'Foo<string>',
    );
  });

  it('should undo escaped backslashes once', () => {
    assert.strictEqual(unEscapeChars('"C:\\\\temp"'), '"C:\\temp"');
  });

  it('should strip padding from double-backtick spans', () => {
    assert.strictEqual(unEscapeChars('`` a`b ``'), 'a`b');
  });

  it('should decode HTML-encoded brackets outside code spans', () => {
    assert.strictEqual(unEscapeChars('Foo&lt;`T`&gt;'), 'Foo<T>');
  });
});
