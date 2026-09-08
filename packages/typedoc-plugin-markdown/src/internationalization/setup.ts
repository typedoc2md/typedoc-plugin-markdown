import { de, en, fr, ja, ko, zh } from '@plugin/internationalization/index.js';
import { Application, Converter } from 'typedoc';

/**
 * Returns subset of translatable strings for the plugin.
 *
 * These will then be merged with the main set of TypeDoc string.
 *
 * @category Functions
 */
export function setupInternationalization(app: Application): void {
  const addTranslations = () => {
    app.internationalization.addTranslations(app.options.getValue('lang'), {
      ...getTranslatable(app),
    });
  };

  // The `merge` entry point strategy revives a project from JSON without ever
  // running the converter, so `EVENT_BEGIN` does not fire for it. Registering
  // on both events covers every strategy; adding the translations twice (as
  // `packages` does, converting each package before reviving) is harmless.
  app.converter.on(Converter.EVENT_BEGIN, addTranslations);
  app.on(Application.EVENT_PROJECT_REVIVE, addTranslations);
}

/**

 */
function getTranslatable(app: Application) {
  const LOCALES = {
    en,
    de,
    fr,
    ko,
    ja,
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
