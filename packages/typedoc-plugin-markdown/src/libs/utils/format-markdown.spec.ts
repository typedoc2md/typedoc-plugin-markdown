import { formatMarkdown } from './format-markdown';

describe('formatMarkdown', () => {
  it('should trim content and restrict new lines', () => {
    const input = `

# headline


Paragraph



## headline

  `;
    const expectedOutput = `# headline

Paragraph

## headline
`;
    const result = formatMarkdown(input);
    expect(result).toEqual(expectedOutput);
  });
});
