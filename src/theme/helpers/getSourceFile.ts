import { Options } from '../options';

export function getSourceFile(fileName: string, line: string, url: string) {

  let md = 'Defined in ';
  if (url) {
    md += `[${fileName}:${line}](${url})`;
  } else if (Options.mdFlavour === 'bitbucket' && Options.mdSourceRepo) {
    const bitbucketUrl = `${Options.mdSourceRepo}/src/master/src/${fileName}`;
    const bitbucketParams = `fileviewer=file-view-default#${fileName}-${line}`;
    md += `[${fileName}:${line}](${bitbucketUrl}?${bitbucketParams})`;
  } else {
    md += `${fileName}:${line}`;
  }

  return md;

}
