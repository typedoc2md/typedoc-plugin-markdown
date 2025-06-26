// THIS IS A TEST CONFIG FILE FOR THE SPEC TESTS

const path = require('path');

const docusaurusPlugin = path.join(__dirname, 'dist');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  plugins: [
    [
      docusaurusPlugin,
      {
        tsconfig: './test/stubs/tsconfig.json',
        entryPoints: ['./test/stubs/src/api.ts'],
        out: './test/out/api-1',
        readme: 'none',
        cleanOutputDir: true,
        disableSources: true,
        hidePageHeader: true,
        hideBreadcrumbs: true,
        logLevel: 'Warn',
      },
    ],
    [
      docusaurusPlugin,
      {
        id: 'api-2',
        tsconfig: './test/stubs/tsconfig.json',
        entryPoints: ['./test/stubs/src/api.ts'],
        out: './test/out/api-2',
        readme: 'none',
        cleanOutputDir: true,
        disableSources: true,
        hidePageHeader: true,
        hideBreadcrumbs: true,
        logLevel: 'Warn',
        sidebar: {
          typescript: true,
        },
      },
    ],
  ],
};

module.exports = config;
