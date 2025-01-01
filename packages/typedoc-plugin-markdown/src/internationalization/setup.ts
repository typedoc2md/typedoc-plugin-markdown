import { en, jp, ko, zh } from '@plugin/internationalization/index.js';
import { Application, Converter } from 'typedoc';

export function setupInternationalization(app: Application): void {
  app.converter.on(Converter.EVENT_BEGIN, () => {
    app.internationalization.addTranslations(
      app.options.getValue('lang'),
      { ...getTranslatable(app) },
      true,
    );
  });
}

/**
 * Returns subset of translatable strings for the plugin.
 *
 * These will then be merged with the main set of TypeDoc string.
 *
 * @category Functions
 */
function getTranslatable(app: Application) {
  const LOCALES = {
    en,
    jp,
    ko,
    zh,
  };
  return {
    ...LOCALES['en'],
    ...(app.lang !== 'en' && Object.keys(LOCALES).includes(app.lang)
      ? { ...LOCALES[app.lang] }
      : {}),
    ...app.options.getValue('locales')[app.lang],
  };
}
