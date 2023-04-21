export function escapeChars(str: string) {
  return str
    .replace(/>/g, '\\>')
    .replace(/</g, '\\<')
    .replace(/{/g, '\\{')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|');
}

export function escapeTableCol(str: string) {
  return str.replace(/(?<!\\)\|/g, '\\|');
}

export function unEscapeChars(str: string) {
  return str
    .replace(/\\</g, '<')
    .replace(/\\>/g, '>')
    .replace(/\\_/g, '_')
    .replace(/\\{/g, '{')
    .replace(/`/g, '')
    .replace(/\*/g, '')
    .replace(/\\\|/g, '|')
    .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1');
}

export function stripComments(str: string) {
  return str
    .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g, ' ')
    .replace(/\n/g, '')
    .replace(/^\s+|\s+$|(\s)+/g, '$1');
}

export function stripLineBreaks(str: string, includeHTML = true) {
  return str
    ? str
        .replace(/\n/g, includeHTML ? '<br />' : ' ')
        .replace(/\r/g, '')
        .replace(/\t/g, ' ')
        .trim()
    : '';
}

export function camelToTitleCase(text: string) {
  return (
    text.substring(0, 1).toUpperCase() +
    text.substring(1).replace(/[a-z][A-Z]/g, (x) => `${x[0]} ${x[1]}`)
  );
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
