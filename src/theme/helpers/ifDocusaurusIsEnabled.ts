import { IsDocusaurusEnabled } from '../utils';

/**
 * Return true if Docusaurus is enabled
 * @param opts
 */
export function ifDocusaurusIsEnabled(opts: any) {
  return IsDocusaurusEnabled() ? opts.fn(this) : opts.inverse(this);
}
