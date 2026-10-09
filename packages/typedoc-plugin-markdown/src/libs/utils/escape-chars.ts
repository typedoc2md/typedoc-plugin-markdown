export function escapeChars(str: string) {
  return (
    str
      // Backslashes first, so the escapes added below are not doubled.
      .replace(/\\/g, '\\\\')
      .replace(/>/g, '\\>')
      .replace(/</g, '\\<')
      .replace(/{/g, '\\{')
      .replace(/}/g, '\\}')
      .replace(/_/g, '\\_')
      .replace(/`/g, '\\`')
      .replace(/\|/g, '\\|')
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/\*/g, '\\*')
  );
}
