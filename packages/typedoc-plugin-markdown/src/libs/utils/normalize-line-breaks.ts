export function normalizeLineBreaks(str: string): string {
  const codeBlocks: string[] = [];

  const placeholder = '\n___CODEBLOCKPLACEHOLDER___\n';
  str = str.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return placeholder;
  });

  const lines = str.split('\n');
  let result = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length === 0) {
      result = result + lines[i] + '\n';
    } else {
      if (
        !lines[i].startsWith('#') &&
        lines[i + 1] &&
        /^[a-zA-Z`]/.test(lines[i + 1])
      ) {
        result = result + lines[i] + ' ';
      } else {
        if (i < lines.length - 1) {
          result = result + lines[i] + '\n';
        } else {
          result = result + lines[i];
        }
      }
    }
  }

  result = result.replace(
    new RegExp(placeholder, 'g'),
    () => `${codeBlocks.shift()}` || '',
  );

  return result;
}
