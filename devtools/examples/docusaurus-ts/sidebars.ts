import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import typedocSidebar from './docs/api-2/typedoc-sidebar';

const sidebars: SidebarsConfig = {
  typedocSidebar: [
    {
      type: 'category',
      label: 'Typedoc API',
      link: {
        type: 'doc',
        id: 'api-2/index',
      },
      items: typedocSidebar.items,
    },
  ],
};

export default sidebars;
