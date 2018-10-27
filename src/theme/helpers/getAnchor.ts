import { getMarkdownEngine } from '../utils';

/**
 * Returns the anchor element
 * @param anchor
 */
export function getAnchor(anchor: string) {
  return getMarkdownEngine() === 'bitbucket' ? '' : `<a id="${anchor}"></a>`;
}
