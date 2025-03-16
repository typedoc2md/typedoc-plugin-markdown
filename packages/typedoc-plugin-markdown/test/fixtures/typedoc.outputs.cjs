// @ts-check

const baseOptions = require('./typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  entryPoints: ['./src/readme/index.ts'],
  plugin: ['typedoc-plugin-markdown'],
  outputs: [
    {
      name: 'html',
      path: './out/html/outputs',
      options: {
        router: 'kind',
      },
    },
    {
      name: 'markdown',
      path: './out/md/outputs',
      options: {
        router: 'module',
      },
    },
  ],
};
