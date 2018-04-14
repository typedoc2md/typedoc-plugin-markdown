import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

export function getMemberGroupHeadingLevel() {
  const options = ThemeService.getOptions();
  return options.mdFlavour === Flavour.GITBOOK ? '#' : '##';
}
