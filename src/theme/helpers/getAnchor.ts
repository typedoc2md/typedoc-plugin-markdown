import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

/**
 * Returns the anchor element
 * @param anchor
 */
export function getAnchor(anchor: string) {
  const options = ThemeService.getOptions();
  return options.mdFlavour === Flavour.BITBUCKET ? '' : `<a id="${anchor}"></a>`;
}
