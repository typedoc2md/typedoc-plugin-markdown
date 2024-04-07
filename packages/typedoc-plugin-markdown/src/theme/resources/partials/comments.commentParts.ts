import { link } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import * as fs from 'fs';
import { CommentDisplayPart, InlineTagDisplayPart } from 'typedoc';

/**
 * @category Comment Partials
 */
export function commentParts(
  this: MarkdownThemeContext,
  model: CommentDisplayPart[],
): string {
  const md: string[] = [];
  const parsedText = (text: string) => {
    const mediaPattern = /media:\/\/([^ ")\]}]+)/g;
    const includePattern = /\[\[include:([^\]]+?)\]\]/g;
    const includeDirectory = this.options.getValue('includes');
    const mediaDirectory = this.options.getValue('media');

    let parsedText = text;

    if (Boolean(includeDirectory)) {
      parsedText = parsedText.replace(
        includePattern,
        (match: string, includeFile: string) => {
          const includeDirectory = this.options.getValue('includes');
          const includesPath = this.getRelativeUrl(
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
          return this.getRelativeUrl(`media/${mediaFile}`, true);
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
                  ? `${link(`${wrap}${part.text}${wrap}`, this.getRelativeUrl(url))}`
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
  return md.join('');
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
