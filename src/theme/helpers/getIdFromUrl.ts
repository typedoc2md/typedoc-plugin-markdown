/**
 * Returns the url without extension
 */

export function getIdFromUrl(url: string) {
    return url.replace(/\.md$/, '');
 }
