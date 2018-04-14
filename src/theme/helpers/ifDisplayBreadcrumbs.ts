import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

/**
 * Return true if breadcrumbs should be displayed
 * @param opts
 */
export function ifDisplayBreadcrumbs(opts: any) {
  const options = ThemeService.getOptions();
  return options.mdFlavour === Flavour.GITBOOK ? opts.inverse(this) : opts.fn(this);
}
