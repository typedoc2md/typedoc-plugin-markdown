/**
 * Returns the anchor ref of the top element
 */
import { ThemeService } from '../service';

export function getTopAnchorRef() {
  return ThemeService.getAnchorRef(ThemeService.projectName);
}
