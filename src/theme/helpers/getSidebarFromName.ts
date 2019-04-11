/**
 * Returns the url without extension
 */

export function getSidebarFromName(title: string) {
    return title.replace(/^\[/, '').replace(/ Module\]$/, '');
 }
