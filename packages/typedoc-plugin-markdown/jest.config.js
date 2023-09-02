const base = require('../../jest.config.base.js');
const path = require('path');

module.exports = {
  ...base,
  displayName: 'typedoc-plugin-markdown',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  setupFiles: ['./jest.helpers.ts'],
};
