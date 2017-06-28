import { ThemeService } from '../service';

export function displayAnchor(anchor: string) {
  const options = ThemeService.getOptions();
  return options.mdFlavour === 'bitbucket' ? '' : `<a id="${anchor}"></a>`;
}
