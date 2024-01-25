export function stripLineBreaks(str: string, includeHTML = true) {
  return str
    .replace(/\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi, includeHTML ? '<br />' : ' ')
    .replace(/\`\`\`ts/g, '`')
    .replace(/\`\`\`/g, '`')
    .replace(/\n/g, ' ');
}
