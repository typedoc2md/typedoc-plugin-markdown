/**
 * This module contains functionality to setup the plugin and configure the renderer.
 *
 * @module
 */
import { Application } from 'typedoc';
import { bootstrap } from './bootstrap';

/**
 * The function that is called by TypeDoc to bootstrap the plugin. https://typedoc.org/guides/development/#plugins.
 *
 * Here we expose additional TypeDoc options and make some adjustments.
 *
 * This method is not intended to be consumed in any other context that via the `plugin` option.
 */
export function load(app: Application) {
  bootstrap(app);
}

// expose other public apis.
export * from './events';
export * from './options/option-maps';
export * from './options/option-types';
export * from './types';
