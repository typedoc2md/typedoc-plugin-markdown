import { Application } from 'typedoc';
import { initialize } from './app';

/**
 * Plugin load
 */
export function load(app: Application) {
  initialize.load(app);
}
