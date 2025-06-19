import { strict as assert } from 'assert';
import { sanitizeComments } from './sanitize-comments.js';

describe('typedoc-plugin-markdown (Utils / sanitizeComments)', () => {
  it('should escape special characters correctly', () => {
    const input = 'Comments <tag></tag>, {braces}, >= 5, < 5, `code`';
    const expectedOutput =
      'Comments \\<tag\\>\\</tag\\>, \\{braces\\}, \\>= 5, \\< 5, `code`';
    const result = sanitizeComments(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should not escape blockquotes', () => {
    const input = '> Blockquote with <tag>';
    const expectedOutput = '> Blockquote with \\<tag\\>';
    const result = sanitizeComments(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should not escape inline code', () => {
    const input = 'Comment with <tag> `code with <tag> and {braces}`';
    const expectedOutput =
      'Comment with \\<tag\\> `code with <tag> and {braces}`';
    const result = sanitizeComments(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should not escape code block', () => {
    const input = `
<tag>
\`\`\`html
<div>x</div>
\`\`\``;
    const expectedOutput = `
\\<tag\\>
\`\`\`html
<div>x</div>
\`\`\``;
    const result = sanitizeComments(input);
    assert.strictEqual(result, expectedOutput);
  });
});
