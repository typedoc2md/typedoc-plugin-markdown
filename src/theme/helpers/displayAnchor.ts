import { Options } from '../options';
import * as Utils from '../utils';

export function displayAnchor(anchor: string) {
  return Options.mdFlavour === 'bitbucket' ? '' : `<a id="${anchor}"></a>`;
}
