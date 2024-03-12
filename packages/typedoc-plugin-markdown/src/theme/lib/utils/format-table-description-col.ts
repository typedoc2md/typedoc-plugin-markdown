export function formatTableDescriptionCol(str: string, includeHTML = true) {
  return str
    .replace(/\|/g, '\\|')
    .replace(/\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi, includeHTML ? '<br />' : ' ')
    .replace(/\`\`\`ts/g, '`')
    .replace(/\`\`\`/g, '`')
    .replace(/\n/g, ' ');
}
