import * as Handlebars from 'handlebars';
import { Options } from '../options';
export function getIndexItem(item: any, urlPrefix: string) {

  const isFile = item.url.split('.').pop() === 'md';
  let url = urlPrefix + item.url;
  if (!isFile) {

    const ref = item.kindString.split(' ')[0].toLowerCase();
    const urlSplit = item.url.split('#');
    if (Options.markdownRepoHost === 'bitbucket') {
      if (item.kindString === 'Function') {

      }
      url = '#' + 'markdown-header-' + urlSplit[1] + '-' + ref;

    } else {
      url = '#' + urlSplit[1] + '-' + ref;
    }
  }

  let md = '[';
  if (item.name) {
    md += item.name;
  } else {
    md += item.kindString;
  }
  md += '](' + url + ')';

  return new Handlebars.SafeString(md);
}
