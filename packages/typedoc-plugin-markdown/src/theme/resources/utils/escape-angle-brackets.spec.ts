import { escapeAngleBrackets } from './escape-angle-brackets';

describe('escapeAngleBrackets', () => {
  it('should escape non-html tag angle brackets', () => {
    const input = '<div>Some text <notATag> more text</div>';
    const expectedOutput = '<div>Some text `<notATag>` more text</div>';
    expect(escapeAngleBrackets(input)).toBe(expectedOutput);
  });

  it('should not escape html tag angle brackets', () => {
    const input = '<div>Some text <span> more text</span></div>';
    const expectedOutput = '<div>Some text <span> more text</span></div>';
    expect(escapeAngleBrackets(input)).toBe(expectedOutput);
  });

  it('should ignore strings inside code blocks', () => {
    const input = '`<div>Some text <notATag> more text</div>`';
    const expectedOutput = '`<div>Some text <notATag> more text</div>`';
    expect(escapeAngleBrackets(input)).toBe(expectedOutput);
  });
});
