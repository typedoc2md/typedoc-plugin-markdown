import * as Handlebars from 'handlebars';
import { Options } from '../options';
export function displayIndexItem(item: any, urlPrefix: string) {

  const isFile = item.url.split('.').pop() === 'md';
  let url = urlPrefix + item.url;

  if (!isFile) {

    if (Options.markdownFlavour === 'bitbucket') {

      const ref = item.kindString.replace(' ', '-').toLowerCase();
      const urlSplit = item.url.split('#');

      url = '#' + 'markdown-header-' + urlSplit[1] + '-' + ref;

      if (item.kindString === 'Function') {
        const funcParams: any = [];
        item.flags.forEach((flag: string) => {
          funcParams.push(flag);
        });
        funcParams.push(item.name);
        funcParams.push(item.kindString);

        url = '#' + 'markdown-header-' + funcParams.join('-').toLowerCase();

      }

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
