export const URL_PREFIX = /^(http|ftp)s?:\/\//;
export const BRACKETS = /\[\[([^\]]+)\]\]/g;
export const INLINE_TAG =
  /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;
export const INCLUDE_PATTERN = /\[\[include:([^\]]+?)\]\]/g;
export const MEDIA_PATTERN = /media:\/\/([^ "\)\]\}]+)/g;
