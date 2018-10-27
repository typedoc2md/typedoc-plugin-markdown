import { getOptions } from '../props';
import { compilePartial } from '../utils';

/**
 * Compiles sources
 * @param sources
 */
export function compileSources(sources: any) {
  const options = getOptions();
  let md = '';
  if (!options.mdHideSources) {
    md = compilePartial('member.sources.hbs', sources);
  }
  return md;
}
