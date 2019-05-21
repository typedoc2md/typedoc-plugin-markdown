import * as fs from 'fs';
import * as path from 'path';
import { Reflection } from 'typedoc';
import { MarkdownPlugin } from '../../plugin';
import { relativeUrl } from './relative-url';

const brackets: RegExp = /\[\[([^\]]+)\]\]/g;
const urlPrefix: RegExp = /^(http|ftp)s?:\/\//;
const inlineTag: RegExp = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;

export function comment(this: string) {
  const includePattern: RegExp = /\[\[include:([^\]]+?)\]\]/g;
  const mediaPattern: RegExp = /media:\/\/([^ "\)\]\}]+)/g;

  let text = this;

  /* istanbul ignore next */
  if (MarkdownPlugin.settings && MarkdownPlugin.settings.includes) {
    text = text.replace(includePattern, (match: string, pathString: string) => {
      pathString = path.join(MarkdownPlugin.settings.includes!, pathString.trim());

      if (fs.existsSync(pathString) && fs.statSync(pathString).isFile()) {
        return fs.readFileSync(pathString, 'utf-8');
      }
      return '';
    });
  }

  if (MarkdownPlugin.settings && MarkdownPlugin.settings.media) {
    text = text.replace(mediaPattern, (match: string, pathString: string) => {
      if (fs.existsSync(path.join(MarkdownPlugin.settings.media!, pathString))) {
        return relativeUrl(`media/${pathString}`);
      }
      return match;
    });
  }

  text = replaceInlineTags(replaceBrackets(text));

  return text;
}

function replaceBrackets(text: string): string {
  return text.replace(
    brackets,
    (match: string, content: string): string => {
      const split = splitLinkText(content);
      return buildLink(match, split.target, split.caption);
    },
  );
}

function splitLinkText(text: string): { caption: string; target: string } {
  let splitIndex = text.indexOf('|');
  if (splitIndex === -1) {
    splitIndex = text.search(/\s/);
  }

  if (splitIndex !== -1) {
    return {
      caption: text.substr(splitIndex + 1).replace(/\n+/, ' '),
      target: text.substr(0, splitIndex),
    };
  } else {
    return {
      caption: text,
      target: text,
    };
  }
}

function replaceInlineTags(text: string): string {
  return text.replace(
    inlineTag,
    (match: string, leading: string, tagName: string, content: string): string => {
      const split = splitLinkText(content);
      const target = split.target;
      const caption = leading || split.caption;
      return buildLink(match, target, caption);
    },
  );
}

function buildLink(original: string, target: string, caption: string): string {
  let reflection: Reflection | undefined;
  if (urlPrefix.test(target)) {
    return target;
  }
  if (MarkdownPlugin.reflection) {
    reflection = MarkdownPlugin.reflection.findReflectionByName(target);
  } else if (MarkdownPlugin.project) {
    reflection = MarkdownPlugin.project.findReflectionByName(target);
  }

  if (reflection && reflection.url) {
    if (urlPrefix.test(reflection.url)) {
      target = reflection.url;
    } else {
      target = relativeUrl(reflection.url);
    }
  } else {
    return original;
  }

  return `[${caption}](${target})`;
}
