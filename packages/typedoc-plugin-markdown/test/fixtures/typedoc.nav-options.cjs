const baseOptions = require('../../../../devtools/packages/fixtures/typedoc.cjs');
module.exports = {
  ...baseOptions,
  navigationLinks: {
    'Nav Link 1': 'http://example.com',
    'Nav Link 2': 'http://example.com',
  },
  navigationLeaves: ['basic', 'has-references'],
  sidebarLinks: {
    'Sidebar Example 1': 'http://example.com',
    'Sidebar Example 2': 'http://example.com',
  },
};
