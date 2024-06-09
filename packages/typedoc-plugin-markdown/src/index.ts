import { initialize } from 'app';
import { Application } from 'typedoc';

/**
 * Plugin load
 */
export function load(app: Application) {
  initialize.load(app);
}

/**
 * Export anything that is available publicly
 */
export * from 'public-api';
