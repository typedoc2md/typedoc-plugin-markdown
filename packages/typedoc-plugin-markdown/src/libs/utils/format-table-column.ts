export function formatTableColumn(str: string) {
  return str
    .replace(/\|/g, '\\|')
    .replace(/\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi, '<br />')
    .replace(/\`\`\`ts/g, '`')
    .replace(/\`\`\`/g, '`')
    .replace(/\n/g, '')
    .replace(/(<br \/>\s*)+$/g, '');
}
