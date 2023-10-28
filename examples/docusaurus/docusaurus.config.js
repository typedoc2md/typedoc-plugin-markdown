const path = require('path');

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const docusaurusPlugin = path.join(
  __dirname,
  '..',
  '..',
  'packages',
  'docusaurus-plugin-typedoc',
  'dist',
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      docusaurusPlugin,
      {
        id: 'query-builder',
        entryPoints: [
          '../../../usecases/react-querybuilder-v4/packages/react-querybuilder',
          '../../../usecases/react-querybuilder-v4/packages/antd',
          '../../../usecases/react-querybuilder-v4/packages/blueprint',
          '../../../usecases/react-querybuilder-v4/packages/bootstrap',
          '../../../usecases/react-querybuilder-v4/packages/bulma',
          '../../../usecases/react-querybuilder-v4/packages/chakra',
          '../../../usecases/react-querybuilder-v4/packages/dnd',
          '../../../usecases/react-querybuilder-v4/packages/fluent',
          '../../../usecases/react-querybuilder-v4/packages/mantine',
          '../../../usecases/react-querybuilder-v4/packages/material',
          '../../../usecases/react-querybuilder-v4/packages/native',
        ],
        out: './docs/query-builder',
        readme: '../../../usecases/react-querybuilder-v4/website/_API_INDEX.md',
        entryPointStrategy: 'packages',
        cleanOutputDir: true,
      },
    ],
    [
      docusaurusPlugin,
      {
        ...require(path.join(__dirname, '../../stubs/typedoc.cjs')),
        entryPoints: '../../stubs/src/reflections/index.ts',
        typeDeclarationFormat: 'table',
        expandObjects: true,
        sidebar: { pretty: true, filteredIds: ['api/index'] },
      },
    ],
    [
      docusaurusPlugin,
      {
        id: 'api-2',
        out: './docs/api-2',
        ...require(path.join(__dirname, '../../stubs/typedoc.cjs')),
        entryPoints: '../../stubs/src/groups/**/*.ts',
        membersWithOwnFile: ['Class', 'Interface'],
      },
    ],
    [
      docusaurusPlugin,
      {
        id: 'api-3',
        out: './docs/api-3',
        ...require(path.join(__dirname, '../../stubs/typedoc.cjs')),
        entryPoints: '../../stubs/src/packages/*',
        entryPointStrategy: 'packages',
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          /*async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems.filter(
              (sidebarItem) => !['api-1/index'].includes(sidebarItem.id),
            );
          },*/
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/api',
            activeBasePath: 'docs',
            label: 'API 1',
            position: 'left',
          },
          {
            to: 'docs/api-2/',
            activeBasePath: 'docs',
            label: 'API 2',
            position: 'left',
          },
          {
            to: 'docs/api-3/',
            activeBasePath: 'docs',
            label: 'API 3',
            position: 'left',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
