import * as path from 'path';
import { MarkdownPlugin } from '../../plugin';

export function relativeUrl(absolute: string) {
  const urlPrefix: RegExp = /^(http|ftp)s?:\/\//;
  if (!MarkdownPlugin.location || urlPrefix.test(absolute)) {
    return absolute;
  } else {
    const relative = path.relative(path.dirname(MarkdownPlugin.location), path.dirname(absolute));
    return path.join(relative, path.basename(absolute)).replace(/\\/g, '/');
  }
}
