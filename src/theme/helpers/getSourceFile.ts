/**
 * Returns the source file definition
 */

import { getOptions } from '../props';
import { getMarkdownEngine } from '../utils';

export function getSourceFile(fileName: string, line: string, url: string) {
  const options = getOptions();
  let md = 'Defined in ';
  if (getMarkdownEngine() === 'bitbucket' && options.mdSourceRepo) {
    const bitbucketUrl = `${options.mdSourceRepo}/src/master/${fileName}`;
    const bitbucketParams = `fileviewer=file-view-default#${fileName}-${line}`;
    md += `[${fileName}:${line}](${bitbucketUrl}?${bitbucketParams})`;
  } else if (url) {
    md += `[${fileName}:${line}](${url})`;
  } else {
    md += `${fileName}:${line}`;
  }
  return md;
}
