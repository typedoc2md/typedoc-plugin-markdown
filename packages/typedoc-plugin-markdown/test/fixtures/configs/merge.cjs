// @ts-check

const baseOptions = require('../typedoc.cjs');

/**
 * Renders the JSON written by `merge-json.cjs`. The `merge` strategy revives a
 * project instead of running the converter, so this fixture guards the plugin
 * translations being loaded on a code path where `EVENT_BEGIN` never fires.
 *
 * @type {import('typedoc').TypeDocOptions & import('../../../dist/index.js').PluginOptions}
 */
module.exports = {
  ...baseOptions,
  entryPointStrategy: 'merge',
  entryPoints: ['../out/json/merge/project.json'],
  plugin: ['../../../dist/index.js'],
  disableSources: true,
  lang: 'de',
  readme: 'none',
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/merge/members/de',
    },
  ],
};
