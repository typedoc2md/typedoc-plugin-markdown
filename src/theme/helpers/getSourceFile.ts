/**
 * Returns the source file definition
 */
import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

export function getSourceFile(fileName: string, line: string, url: string) {
  const options = ThemeService.getOptions();
  let md = 'Defined in ';
  if (ThemeService.getMarkdownEngine() === MarkdownEngine.BITBUCKET && options.mdSourceRepo) {
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
