const baseOptions = require('./typedoc.cjs');

/**
 * Shared options for the per-locale fixtures.
 *
 * The table formats matter: most of the plugin's own translatable strings are
 * table headers, and every format defaults to `list`, which renders none of
 * them. Keep them on or the locale fixtures stop covering what they exist for.
 */
const localeOptions = {
  ...baseOptions,
  entryPoints: ['../src/locales/*.ts'],
  plugin: ['../../../dist/index.js'],
  name: 'typedoc-stubs',
  disableSources: true,
  readme: 'none',
  indexFormat: 'table',
  enumMembersFormat: 'table',
  parametersFormat: 'table',
  classPropertiesFormat: 'table',
  interfacePropertiesFormat: 'table',
  typeAliasPropertiesFormat: 'table',
  typeDeclarationFormat: 'table',
};

/**
 * `theme_package`, `theme_packages` and `theme_version` are only ever rendered
 * by the packages index, so they need a run under the `packages` strategy.
 *
 * One locale is enough: they reach the output through the same registration as
 * every other string, which the per-locale fixtures above already cover. This
 * run only has to show the packages index picking those three up translated,
 * so it is German rather than English.
 */
const PACKAGES_LANG = 'de';

const packagesOptions = {
  ...baseOptions,
  entryPoints: ['../src/packages/package-1', '../src/packages/package-2'],
  entryPointStrategy: 'packages',
  plugin: ['../../../dist/index.js'],
  name: 'packages-example',
  disableSources: true,
  mergeReadme: true,
  indexFormat: 'table',
};

/**
 * Builds the fixture configs for a single locale.
 *
 * @param {string} lang
 */
module.exports = function localeConfig(lang) {
  return {
    ...localeOptions,
    lang,
    outputs: [
      {
        name: 'markdown',
        path: `../out/md/locales/members/${lang}`,
      },
      {
        name: 'html',
        path: `../out/html/locales/${lang}`,
      },
    ],
  };
};

module.exports.packages = function localePackagesConfig() {
  return {
    ...packagesOptions,
    lang: PACKAGES_LANG,
    outputs: [
      {
        name: 'markdown',
        path: `../out/md/locales/packages/${PACKAGES_LANG}`,
      },
    ],
  };
};
