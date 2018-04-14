import { Flavour } from '../enums/flavour.enum';
import { ThemeService } from '../theme.service';

/**
 * Return true if index item should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayMainTitle(item: any, opts: any) {
  const options = ThemeService.getOptions();
  if (options.mdFlavour === Flavour.GITBOOK || item.model.displayReadme) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
