import { defaultTheme } from 'vuepress';
import typedocSidebar from './typedoc-sidebar.json';

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
      '/api/': [
        {
          text: 'API',
          children: typedocSidebar,
        },
      ],
    },
  }),
};
