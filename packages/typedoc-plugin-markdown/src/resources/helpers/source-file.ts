export function sourceFile(fileName: string, line: string, url: string) {
  const md = url ? `[${fileName}:${line}](${url})` : `${fileName}:${line}`;
  return 'Defined in Y' + md;
}
