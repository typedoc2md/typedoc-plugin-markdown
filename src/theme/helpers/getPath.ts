import { IsDocusaurusEnabled } from '../utils';

/**
 * Return an empty path if Docusaurus is enabled.
 */
export function getPath(): string {
  return (IsDocusaurusEnabled() ? '' : '../');
}
