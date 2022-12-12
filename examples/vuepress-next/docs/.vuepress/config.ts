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
    },
  }),
  plugins: [
    typedocPlugin({
      entryPoints: ['../../stubs/src/index.ts'],
      tsconfig: '../../stubs/tsconfig.json',
      cleanOutputDir: true,
    }),
  ],
};
