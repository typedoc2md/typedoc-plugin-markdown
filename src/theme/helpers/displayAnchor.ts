import { Options } from '../options';
import * as Utils from '../utils';

export function displayAnchor(anchor: string) {
  return Options.markdownFlavour === 'bitbucket' ? '' : `<a id="${anchor}"></a>`;
}
