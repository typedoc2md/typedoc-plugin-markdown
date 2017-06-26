import { Options } from '../options';
import { getAnchorRef } from '../utils';

export function getTopAnchorRef() {
  return getAnchorRef(Options.projectName);
}
