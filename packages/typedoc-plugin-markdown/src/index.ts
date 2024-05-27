import { Application } from 'typedoc';
import { initialize } from './app';

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
