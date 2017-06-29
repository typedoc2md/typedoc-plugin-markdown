import { ThemeService } from '../service';

/**
 * Compiles sources
 * @param sources
 */
export function compileSources(sources: any) {
  const options = ThemeService.getOptions();
  let md = '';
  if (!options.mdHideSources) {
    md = ThemeService.compilePartial('member.sources.hbs', sources);
  }
  return md;
}
