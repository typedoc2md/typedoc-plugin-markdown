import { sanitizeComments } from './sanitize-comments';

describe('sanitizeComments', () => {
  it('should escape special characters correctly', () => {
    const input = 'Comments <tag></tag>, {braces}, >= 5, < 5, `code`';
    const output =
      'Comments \\<tag\\>\\</tag\\>, \\{braces\\}, \\>= 5, \\< 5, `code`';
    const result = sanitizeComments(input);
    expect(result).toEqual(output);
  });

  it('should not escape blockquotes', () => {
    const input = '> Blockquote with <tag>';
    const output = '> Blockquote with \\<tag\\>';
    const result = sanitizeComments(input);
    expect(result).toEqual(output);
  });

  it('should not escape inline code', () => {
    const input = 'Comment with <tag> `code with <tag> and {braces}`';
    const output = 'Comment with \\<tag\\> `code with <tag> and {braces}`';
    const result = sanitizeComments(input);
    expect(result).toEqual(output);
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
    expect(result).toEqual(expectedOutput);
  });
});
