module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs v1',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
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
          title: 'Guide',
          path: '/guide/',
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      'vuepress-plugin-typedoc',
      {
        entryPoints: ['../../stubs/src/index.ts'],
        tsconfig: '../../stubs/tsconfig.json',
        cleanOutputDir: true,
      },
    ],
  ],
};
