import * as path from 'path';

/**
 * A set of pure utils to be consumed accross the plugin.
 *
 */
export const utils = () => {
  return {
    parseUrl: (url: string) => encodeURI(url),
    escapeChars: (str: string) => {
      return str
        .replace(/>/g, '\\>')
        .replace(/</g, '\\<')
        .replace(/{/g, '\\{')
        .replace(/_/g, '\\_')
        .replace(/`/g, '\\`')
        .replace(/\|/g, '\\|')
        .replace(/\*/g, '\\*');
    },

    /**
     * Escapes non html tag angle brackets inside comment blocks.
     * Ignores strings inside code blocks
     */
    escapeAngleBrackets: (str: string) => {
      const re = /<(?=(?:[^`]*`[^`]*`)*[^`]*$)[^<]+?>/gi;
      return str.replace(re, (tags) => {
        const htmlRe =
          /<(?!\/?(div|span|p|a|br|img|ul|li|strike|em|strong|b)(>|\s))[^<]+?>/g;
        const shouldEscape = tags.match(htmlRe);
        return shouldEscape
          ? tags.replace(/>/g, '>` ').replace(/</g, '`<')
          : tags;
      });
    },

    stripComments: (str: string) => {
      return str
        .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g, ' ')
        .replace(/\n/g, '')
        .replace(/^\s+|\s+$|(\s)+/g, '$1');
    },

    formatTableDescriptionCol: (str: string) => {
      return str.replace(/\|/g, '\\|');
    },

    formatTableNameCol: (str: string) => {
      return str.includes('|') ? str.replace(/\|/g, '\\|') : `\`${str}\``;
    },

    stripLineBreaks: (str: string, includeHTML = true) => {
      return str
        .replace(
          /\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi,
          includeHTML ? '<br />' : ' ',
        )
        .replace(/\`\`\`ts/g, '`')
        .replace(/\`\`\`/g, '`')
        .replace(/\n/g, ' ');
    },
    getRelativeUrl(url: string, root?: string) {
      const baseUrl = path.relative(
        path.dirname(root || '.'),
        path.dirname(url),
      );
      const relativeUrl = path
        .join(baseUrl, path.basename(url))
        .replace(/\\/g, '/');
      return relativeUrl;
    },
  };
};
