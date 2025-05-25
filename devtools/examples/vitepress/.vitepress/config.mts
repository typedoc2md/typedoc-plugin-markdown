import { defineConfig } from 'vitepress';
import typedocSidebar2 from '../api-2/typedoc-sidebar.json';
import typedocSidebar3 from '../api-3/typedoc-sidebar.json';
import typedocSidebar4 from '../api-4/typedoc-sidebar.json';
import typedocSidebar from '../api/typedoc-sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'API 1',
        link: '/api/',
        items: typedocSidebar,
      },
      {
        text: 'API 2',
        link: '/api-2/',
        items: typedocSidebar2,
      },
      {
        text: 'API 3',
        link: '/api-3/',
        items: typedocSidebar3,
      },
      {
        text: 'API 4',
        link: '/api-4/',
        items: typedocSidebar4,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
