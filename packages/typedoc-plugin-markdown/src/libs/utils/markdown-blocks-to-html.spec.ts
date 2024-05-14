import { markdownBlocksToHtml } from './markdown-blocks-to-html';

describe('markdownBlocksToHtml', () => {
  it('should correctly convert markdown to HTML', () => {
    const input = `This is a test

Double new line

### Heading

<h4>Subheading</h4>

- list item 1
- list item 2`;

    const expectedOutput = `<p>This is a test</p><p>Double new line</p><h3>Heading</h3><h4>Subheading</h4><ul><li>list item 1</li><li>list item 2</li></ul>`;

    expect(markdownBlocksToHtml(input)).toBe(expectedOutput);
  });

  it('should correctly convert markdown to HTML', () => {
    const input = `<p>paragraph</p>

New line

<p>paragraph</p>
<p>
  paragraph with new line
</p>`;

    const expectedOutput = `<p>paragraph</p><p>New line</p><p>paragraph</p><p>paragraph with new line </p>`;

    expect(markdownBlocksToHtml(input)).toBe(expectedOutput);
  });
});
