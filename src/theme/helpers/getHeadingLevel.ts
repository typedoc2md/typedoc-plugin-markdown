import { getMarkdownEngine } from '../utils';

export function getHeadingLevel(baseLevel: string) {
  return getMarkdownEngine() === 'gitbook'
    ? baseLevel.substring(0, baseLevel.length - 1)
    : baseLevel;
}
