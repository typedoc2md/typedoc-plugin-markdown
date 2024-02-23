import * as fs from 'fs';
import { CommentDisplayPart, InlineTagDisplayPart } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { getRelativeUrl } from '../utils';

export function commentParts(
  context: MarkdownThemeRenderContext,
  parts: CommentDisplayPart[],
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
          const includesPath = getRelativeUrl(
            `${includeDirectory}/${includeFile}`,
            context.page?.url,
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
          return getRelativeUrl(`media/${mediaFile}`, context.page?.url);
        },
      );
    }

    return parsedText;
  };
  for (const part of parts) {
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
                  ? `${context.partials.linkTo(
                      `${wrap}${part.text}${wrap}`,
                      url,
                    )}`
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

  return part.target;
}

export function isFile(file: string) {
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}
