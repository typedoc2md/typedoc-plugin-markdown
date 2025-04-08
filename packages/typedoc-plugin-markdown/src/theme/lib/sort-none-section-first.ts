import { MemberSection } from '@plugin/types/theme.js';
import { isNoneSection } from './is-none-section.js';

export function sortNoneSectionFirst(a: MemberSection, b: MemberSection) {
  if (isNoneSection(a)) {
    return -1;
  }
  if (isNoneSection(b)) {
    return 1;
  }
  return 0;
}
