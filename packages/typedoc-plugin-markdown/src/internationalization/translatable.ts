/**
 * Translations methods.
 *
 * @module
 */
import { locales } from 'internationalization';
import { Application } from 'typedoc';

/**
 * Returns subset of translatable strings for the plugin.
 *
 * These will then be merged with the main set of TypeDoc string.
 */
export function getTranslatable(app: Application) {
  const LOCALES = {
    en: locales.en,
    ko: locales.ko,
  };
  return {
    ...LOCALES['en'],
    ...(app.lang !== 'en' && Object.keys(LOCALES).includes(app.lang)
      ? { ...LOCALES[app.lang] }
      : {}),
    ...app.options.getValue('locales')[app.lang],
  };
}
