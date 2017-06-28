import { ThemeService } from '../service';
import { getAnchorRef } from '../utils';

export function getTopAnchorRef() {
  return getAnchorRef(ThemeService.projectName);
}
