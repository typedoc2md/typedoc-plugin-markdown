import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

export function getHeadingLevel(baseLevel: string) {
  const options = ThemeService.getOptions();
  return options.mdFlavour === Flavour.GITBOOK ? baseLevel.substring(0, baseLevel.length - 1) : baseLevel;
}
