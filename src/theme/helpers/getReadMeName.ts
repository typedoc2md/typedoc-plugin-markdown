import { IsDocusaurusEnabled } from '../utils';

/**
 * Return alternate README filename if Docusaurus is enabled.
 */
export function getReadMeName(): string {
  return (IsDocusaurusEnabled() ? 'api-readme.md' : '../README.md');
}
