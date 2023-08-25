import { defaultTheme } from 'vuepress';
import { typedocPlugin } from 'vuepress-plugin-typedoc/next';

module.exports = {
  title: 'VuePress Docs v2',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md'],
        },
      ],
      '/api': require('../api/typedoc-sidebar.json'),
    },
  }),
  plugins: [
    typedocPlugin({
      entryPoints: ['../../stub-project/src/index.ts'],
      tsconfig: '../../stub-project/tsconfig.json',
      cleanOutputDir: true,
    }),
  ],
};
