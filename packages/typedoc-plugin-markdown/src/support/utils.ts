import { ReflectionKind } from 'typedoc';
import { PLURALS } from './constants';

export function formatContents(contents: string) {
  return (
    contents
      .replace(/[\r\n]{3,}/g, '\n\n')
      .replace(/!spaces/g, '')
      .replace(/^\s+|\s+$/g, '') + '\n'
  );
}

/**
 * Escapes certain characters with \\\\.
 *
 * Characters escaped by default:
 * ```
 * < > _ ` |
 * ```
 */
export function escapeChars(str: string, toEscape = '<>_`|') {
  return str
    .replace(new RegExp(`([${toEscape}])`, 'g'), '\\$1')
    .replace(/\\\\/g, '\\');
}

export function stripComments(str: string) {
  return str
    .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g, ' ')
    .replace(/\n/g, '')
    .replace(/^\s+|\s+$|(\s)+/g, '$1');
}

export function stripLineBreaks(str: string) {
  return str
    ? str.replace(/\n/g, ' ').replace(/\r/g, ' ').replace(/\t/g, ' ').trim()
    : '';
}

export function camelToTitleCase(text: string) {
  return (
    text.substring(0, 1).toUpperCase() +
    text.substring(1).replace(/[a-z][A-Z]/g, (x) => `${x[0]} ${x[1]}`)
  );
}

export function getKindPlural(kind: ReflectionKind): string {
  if (kind in PLURALS) {
    return PLURALS[kind as keyof typeof PLURALS];
  } else {
    return getKindString(kind) + 's';
  }
}

export function getKindString(kind: ReflectionKind): string {
  let str = ReflectionKind[kind];
  str = str.replace(/(.)([A-Z])/g, (_m, a, b) => a + ' ' + b.toLowerCase());
  return str;
}
