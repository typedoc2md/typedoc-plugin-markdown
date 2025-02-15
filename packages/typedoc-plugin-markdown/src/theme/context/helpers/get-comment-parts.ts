import { backTicks, link } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/escape-chars.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import * as fs from 'fs';
import {
  CommentDisplayPart,
  DeclarationReflection,
  InlineTagDisplayPart,
  Reflection,
  ReflectionKind,
} from 'typedoc';

export function getCommentParts(
  this: MarkdownThemeContext,
  model: CommentDisplayPart[],
): string {
  const md: string[] = [];
  for (const part of model) {
    switch (part.kind) {
      case 'text':
        md.push(part.text);
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
              const url = getUrlOld(part);
              if (url) {
                if (part.tag === '@linkcode') {
                  md.push(
                    `${link(backTicks(part.text), this.getRelativeUrl(url))}`,
                  );
                } else {
                  md.push(
                    `${link(escapeChars(part.text), this.getRelativeUrl(url))}`,
                  );
                }
              } else {
                md.push(escapeChars(part.text));
              }
            } else {
              md.push(escapeChars(part.text));
            }
            break;
          }
          default:
            md.push(`{${part.tag} ${part.text}}`);
            break;
        }
        break;
      case 'relative-link':
        switch (typeof part.target) {
          case 'number': {
            const reflection = this.page.project.files.resolve(
              part.target,
              this.page.model.project,
            );
            let url: string | undefined;
            if (typeof reflection === 'object' && reflection.url) {
              url = this.getRelativeUrl(reflection.url);
            } else {
              const fileName = this.page.project.files.getName(part.target);
              if (fileName) {
                const anchor = part.targetAnchor ? `#${part.targetAnchor}` : '';
                url = this.getRelativeUrl(`_media/${fileName}${anchor}`);
              }
            }

            if (url) {
              md.push(url);
              break;
            }
          }
          // fall through
          case 'undefined':
            md.push(part.text);
            break;
        }
        break;
      default:
        md.push('');
    }
  }
  return md.join('');
}

export function getTargetReflection(part: InlineTagDisplayPart) {
  let url: string | undefined;
  let target: Reflection | undefined;
  if (
    part.target &&
    part.target instanceof DeclarationReflection &&
    'id' in part.target
  ) {
    target = part.target;
    url = part.target.url;
    if (!url) {
      target = part.target.parent!;
      url = part.target.url;
      while (!url && target.parent) {
        target = target.parent;
        url = target.url;
      }
    }
  }
  return target;
}

export function getUrl(part: InlineTagDisplayPart) {
  let url: string | undefined;
  if (part.target) {
    if (typeof part.target === 'string') {
      url = part.target;
    } else if ('id' in part.target) {
      url = getTargetUrl(part.target);
      if (!url) {
        let target = part.target.parent!;
        url = getTargetUrl(part.target);
        while (!url && target.parent) {
          target = target.parent;
          url = getTargetUrl(target);
        }
      }
    }
  }
  return url;
}

function getTargetUrl(target: Reflection) {
  if (
    [ReflectionKind.Property, ReflectionKind.EnumMember].includes(target.kind)
  ) {
    return target.url?.replace(/#.*$/, `#${target.getFullName()}`);
  }
  return target.url;
}

export function getUrlOld(part: InlineTagDisplayPart) {
  if (typeof part.target === 'string') {
    return part.target;
  }
  if (part.target instanceof DeclarationReflection) {
    if (part.target.url) {
      return getTargetUrl(part.target);
    }

    if (part.target?.parent?.url) {
      return getTargetUrl(part.target.parent);
    }
  }

  return null;
}

export function isFile(file: string) {
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}
