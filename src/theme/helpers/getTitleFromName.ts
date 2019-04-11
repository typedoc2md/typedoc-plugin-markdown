/**
 * Returns the url without extension
 */

export function getTitleFromName(title: string) {
    return title.replace(/^\[/, '').replace(/ Module\]$/, ' Module');
 }
