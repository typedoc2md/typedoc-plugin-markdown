import { MemberSection } from '@plugin/types/index.js';

export function isNoneSection(section: MemberSection): boolean {
  return section.title.toLocaleLowerCase() === 'none';
}
