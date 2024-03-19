import { link } from '@plugin/theme/lib/markdown';
import * as fs from 'fs';
import { CommentDisplayPart, InlineTagDisplayPart } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Parses and renders individual comment strings.
 *
 * @category Comment Partials
 */
export function commentParts(
  context: MarkdownThemeRenderContext,
  model: CommentDisplayPart[],
): string {
  const md: string[] = [];
  const parsedText = (text: string) => {
    const mediaPattern = /media:\/\/([^ ")\]}]+)/g;
    const includePattern = /\[\[include:([^\]]+?)\]\]/g;
    const includeDirectory = context.options.getValue('includes');
    const mediaDirectory = context.options.getValue('media');

    let parsedText = text;

    if (Boolean(includeDirectory)) {
      parsedText = parsedText.replace(
        includePattern,
        (match: string, includeFile: string) => {
          const includeDirectory = context.options.getValue('includes');
          const includesPath = context.helpers.getRelativeUrl(
            `${includeDirectory}/${includeFile}`,
            true,
          );
          if (isFile(includesPath)) {
            const includeContent = fs.readFileSync(includesPath);
            return includeContent.toString();
          } else {
            return match;
          }
        },
      );
    }

    if (Boolean(mediaDirectory)) {
      parsedText = parsedText.replace(
        mediaPattern,
        (match: string, mediaFile: string) => {
          return context.helpers.getRelativeUrl(`media/${mediaFile}`, true);
        },
      );
    }

    return parsedText;
  };
  for (const part of model) {
    switch (part.kind) {
      case 'text':
        md.push(parsedText(part.text));
        break;
      case 'code':
        md.push(part.text);
        break;
      case 'inline-tag':
        switch (part.tag) {
          case '@label':
          case '@inheritdoc':
            break;
          case '@link':
          case '@linkcode':
          case '@linkplain': {
            if (part.target) {
              const url = getUrl(part);
              const wrap = part.tag === '@linkcode' ? '`' : '';
              md.push(
                url
                  ? `${link(`${wrap}${part.text}${wrap}`, context.helpers.getRelativeUrl(url))}`
                  : part.text,
              );
            } else {
              md.push(part.text);
            }
            break;
          }
          default:
            md.push(`{${part.tag} ${part.text}}`);
            break;
        }
        break;
      default:
        md.push('');
    }
  }
  return escapeComments(
    md.join(''),
    context.options.getValue('preserveMarkup'),
  );
}

function getUrl(part: InlineTagDisplayPart) {
  if ((part.target as any).url) {
    return (part.target as any).url;
  }

  if ((part.target as any)?.parent?.url) {
    return (part.target as any)?.parent?.url;
  }

  return typeof part.target === 'string' ? part.target : '';
}

export function isFile(file: string) {
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}

function escapeComments(str: string, preserveTags: boolean) {
  const re = /<(?=(?:[^`]*`[^`]*`)*[^`]*$)[^<]+?>/gi;
  const codeBlocks: string[] = [];
  const placeholder = '___CODEBLOCKPLACEHOLDER___';

  // Replace code blocks with placeholders
  str = str.replace(/(```[\s\S]*?```|`[^`]*?`)/g, (match) => {
    codeBlocks.push(match);
    return placeholder;
  });

  const htmlTags = [
    'div',
    'span',
    'p',
    'a',
    'br',
    'img',
    'ul',
    'li',
    'strike',
    'em',
    'strong',
    'b',
    'code',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ];

  // Perform escaping outside of code blocks
  // - Wrap non-html tags in code blocks
  // - Escape non-JSX curly braces
  str = str
    .replace(re, (tags) => {
      const htmlRe = new RegExp(
        `<(?!\/?(${htmlTags.join('|')})(>|\\s))[^<]+?>`,
        'g',
      );
      const shouldEscapeTags = !preserveTags && tags.match(htmlRe);
      return shouldEscapeTags
        ? tags.replace(/>/g, '>`').replace(/</g, '`<')
        : tags;
    })
    .replace(/(?<!\\)(?<!`)(?<!{)(?<!{{){(?!`)(?!{)(?!{{)/g, '\\{')
    .replace(/(?<!\\)(?<!`)(?!{)(?!{{)(?<!})}(?!`)(?!{)(?!})/g, '\\}');

  // Replace placeholders with original code blocks
  str = str.replace(
    new RegExp(placeholder, 'g'),
    () => codeBlocks.shift() || '',
  );

  return str;
}
