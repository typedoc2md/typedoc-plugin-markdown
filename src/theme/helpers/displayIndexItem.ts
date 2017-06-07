import * as Handlebars from 'handlebars';
import { Options } from '../options';
export function displayIndexItem(item: any, urlPrefix: string) {

  const isFile = item.url.split('.').pop() === 'md';
  let url = urlPrefix + item.url;

  if (!isFile) {

    if (Options.markdownRepoHost === 'bitbucket') {

      const ref = item.kindString.split(' ')[0].toLowerCase();
      const urlSplit = item.url.split('#');

      url = '#' + 'markdown-header-' + urlSplit[1] + '-' + ref;

      if (item.kindString === 'Function') {
        const funcParams: any = [];
        let returnType = 'void';
        item.signatures.forEach((signature: any) => {

          if (signature.parameters) {
            signature.parameters.forEach((param: any) => {
              funcParams.push(param.name + param.type);
            });
          }

          if (signature.type.reflection) {
            returnType = signature.type.reflection.name.toLowerCase();
          }

          url = '#' + 'markdown-header-' + item.name.toLowerCase() + funcParams.join('-').toLowerCase() + returnType;

        });

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
