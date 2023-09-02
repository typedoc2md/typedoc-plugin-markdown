/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  //typedocSidebar1: require('./docs/api-1/typedoc-sidebar.cjs'),

  typedocSidebar2: [
    {
      type: 'category',
      label: 'Typedoc Docs',
      link: {
        type: 'doc',
        id: 'api-1/index',
      },
      items: require('./docs/api-1/typedoc-sidebar.cjs'),
    },
  ],
  /*
  exampleCategory: [
    {
      type: 'category',
      label: 'API 2',
      link: {
        type: 'doc',
        id: 'api-2/index',
      },
      items: require('./docs/api-2/typedoc-sidebar.cjs'),
    },
    {
      type: 'category',
      label: 'API 3',
      link: {
        type: 'doc',
        id: 'api-3/index',
      },
      items: require('./docs/api-3/typedoc-sidebar.cjs'),
    },
  ],*/
};

module.exports = sidebars;
