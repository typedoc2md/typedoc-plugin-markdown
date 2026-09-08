// @ts-check

const baseOptions = require('../typedoc.cjs');

/**
 * Writes the project JSON consumed by `merge.cjs`.
 *
 * @type {import('typedoc').TypeDocOptions & import('../../../dist/index.js').PluginOptions}
 */
module.exports = {
  ...baseOptions,
  entryPoints: ['../src/reflections/classes.ts'],
  plugin: ['../../../dist/index.js'],
  disableSources: true,
  readme: 'none',
  json: '../out/json/merge/project.json',
};
