import { ThemeService } from '../service';

/**
 * Returns the anchor element
 * @param anchor
 */
export function getAnchor(anchor: string) {
  const options = ThemeService.getOptions();
  return options.mdFlavour === 'bitbucket' ? '' : `<a id="${anchor}"></a>`;
}
