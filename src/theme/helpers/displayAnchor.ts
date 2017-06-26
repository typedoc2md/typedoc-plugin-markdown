import { Options } from '../options';

export function displayAnchor(anchor: string) {
  return Options.mdFlavour === 'bitbucket' ? '' : `<a id="${anchor}"></a>`;
}
